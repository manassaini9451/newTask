import React, { useState } from "react";
import FileItem from "./fileItem";
import initialData from "../data/initialData";
import "../styles.css";

const FileExplorer = () => {
  const [files, setFiles] = useState(initialData);

  const updateFiles = (updatedFiles) => {
    setFiles([...updatedFiles]);
  };

  return (
    <div className="file-explorer">
      {files.map((item) => (
        <FileItem key={item.id} item={item} updateFiles={updateFiles} files={files} />
      ))}
    </div>
  );
};

export default FileExplorer;