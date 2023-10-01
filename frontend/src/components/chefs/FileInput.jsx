import { Box, TextField,IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';


const FileInput = ({ index, file, onFileChange, onDescriptionChange, onRemoveFile }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: '8px' }}>
      <TextField
        label={`File ${index + 1} Description`}
        fullWidth
        variant="outlined"
        value={file.description}
        onChange={(e) => onDescriptionChange(index, e.target.value)}
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={(e) => onFileChange(index, e.target.files[0])}
      />
      <IconButton onClick={() => onRemoveFile(index)}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default FileInput;
