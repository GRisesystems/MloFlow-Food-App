import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import FileInput from './FileInput';

const FileUpload = ({ onFileDataChange, additionalFileData }) => {
  const [fileData, setFileData] = useState(additionalFileData);

  const addFile = () => {
    if (fileData.length < 4) {
      setFileData([...fileData, { file: null, description: '' }]);
    }
  };

  const removeFile = (index) => {
    const updatedFileData = [...fileData];
    updatedFileData.splice(index, 1);
    setFileData(updatedFileData);
    onFileDataChange(updatedFileData); // Update the parent component immediately
  };

  const handleFileChange = (index, selectedFile) => {
    const updatedFileData = [...fileData];
    updatedFileData[index].file = selectedFile;
    setFileData(updatedFileData);
    onFileDataChange(updatedFileData); // Update the parent component immediately
  };

  const handleDescriptionChange = (index, description) => {
    const updatedFileData = [...fileData];
    updatedFileData[index].description = description;
    setFileData(updatedFileData);
    onFileDataChange(updatedFileData); // Update the parent component immediately
  };

  return (
    <Box>
      {fileData.map((file, index) => (
        <FileInput
          key={index}
          index={index}
          file={file}
          onFileChange={handleFileChange}
          onDescriptionChange={handleDescriptionChange}
          onRemoveFile={removeFile}
        />
      ))}

      {fileData.length < 4 && (
        <Button variant="contained" color="primary" onClick={addFile}>
          Add Another File
        </Button>
      )}
    </Box>
  );
};

export default FileUpload;
