// src/pages/NotFound.tsx
import React from 'react';
import { Typography } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        The requested page could not be found.
      </Typography>
    </div>
  );
};

export default NotFound;