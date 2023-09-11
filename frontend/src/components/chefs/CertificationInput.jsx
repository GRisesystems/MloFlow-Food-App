// CertificationInput.js
import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CertificationInput = ({ index, certification, onCertificationChange, onRemoveCertification }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: '8px' }}>
      <TextField
        label={`Certificate ${index + 1} Description`}
        fullWidth
        variant="outlined"
        value={certification.description}
        onChange={(e) => onCertificationChange(index, e.target.value)}
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={(e) => onCertificationChange(index, e.target.files[0])}
      />
      <IconButton onClick={() => onRemoveCertification(index)}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default CertificationInput;
