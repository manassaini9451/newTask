import React, { useState } from "react";
import { FaFolder, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import FileItem from "./fileItem";
import { v4 as uuidv4 } from "uuid";

const FolderItem = ({ item, updateFiles, files }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const addItem = (type) => {l
    const newItem = {
      id: uuidv4(),
      name: type === "file" ? "New File.txt" : "New Folder",
      type,
      isOpen: false,
      children: type === "folder" ? [] : undefined,
    };

    const updateStructure = (items) =>
      items.map((folder) =>
        folder.id === item.id
          ? { ...folder, children: [...folder.children, newItem] }
          : { ...folder, children: updateStructure(folder.children || []) }
      );

    updateFiles(updateStructure(files));
  };

  return (
    <div className="folder-item">
      <FaFolder onClick={toggleFolder} /> {item.name}
      <button onClick={() => addItem("file")}><FaPlus /> File</button>
      <button onClick={() => addItem("folder")}><FaPlus /> Folder</button>
      {isOpen && item.children && (
        <div className="folder-contents">
          {item.children.map((child) => (
            <FileItem key={child.id} item={child} updateFiles={updateFiles} files={files} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderItem;
