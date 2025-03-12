import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: '1rem' } }}>
        © {new Date().getFullYear()} Santiago Arias. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;