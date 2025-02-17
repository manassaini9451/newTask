import React from "react";
import { FaFile, FaFolder } from "react-icons/fa";
import FolderItem from "./folderItem";

const FileItem = ({ item, updateFiles, files }) => {
  return (
    <div className="file-item">
      {item.type === "folder" ? (
        <FolderItem item={item} updateFiles={updateFiles} files={files} />
      ) : (
        <>
          <FaFile /> {item.name}
        </>
      )}
    </div>
  );
};

export default FileItem;