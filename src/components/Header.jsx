import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return(
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>Dr. Oleksandr Zaitsev</Typography>
    </Box>
  );
}