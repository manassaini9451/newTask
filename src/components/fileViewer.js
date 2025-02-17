import React from 'react';

const FileViewer = ({ currentFile }) => {
  return (
    <div className="file-viewer">
      {currentFile ? (
        <div>
          <h3>Viewing: {currentFile.name}</h3>
          <p>Content of the file will be here...</p>
        </div>
      ) : (
        <p>Select a file to view its content.</p>
      )}
    </div>
  );
};

export default FileViewer;
