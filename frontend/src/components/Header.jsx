import React from 'react';
import { Box, Typography, Stack, IconButton, Button, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';
import meImage from '../assets/me.jpg'; // Importa la imagen


const Header = () => {
  return (
    <Box 
      id="inicio"
      sx={{ 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center', 
        py: { xs: 5, md: 15 },
        gap: { xs: 3, md: 4 },
        maxWidth: '1800px',
        mx: 'auto'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar 
          src={meImage }
          alt="Santiago Arias" 
          sx={{ 
            width: { xs: 200, sm: 200, lg: 300}, 
            height: { xs: 200, sm: 200, lg: 300 }, 
            mb: 3,
            mt: { xs: -18, sm: -2 }
        }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          fontWeight="bold" 
          gutterBottom
          sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4.5rem' }, color: '#F2EAE4' }}
        >
          Santiago Arias
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Typography 
          variant="h4" 
          color="primary" 
          gutterBottom
          sx={{ fontSize: { xs: '1.75rem', sm: '2rem', lg: '2.5rem' }, color: '#00010D' }}
        >
          Desarrollador Web Full Stack
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            maxWidth: { xs: '90%', sm: 600, lg: 800 }, 
            mb: 4,
            fontSize: { lg: '1.1rem' },
            textAlign: 'center',
            mx: 'auto',
            color: '#F2EAE4'
          }}
        >
          Apasionado por crear experiencias digitales innovadoras y funcionales. Especializado en desarrollo web con React, Node.js y tecnologías modernas.
        </Typography>
      </motion.div>
      
      <Stack direction="row" spacing={3}>
        <IconButton aria-label="github" size="large" color="inherit" sx={{ '& svg': { fontSize: { lg: 35 } } }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="linkedin" size="large" color="primary" sx={{ '& svg': { fontSize: { lg: 35 } } }}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="email" size="large" color="secondary" sx={{ '& svg': { fontSize: { lg: 35 } } }}>
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
      
      <Box sx={{ mt: 4 }}>
        <Button 
          variant="contained" 
          size="large"
          endIcon={<CodeIcon />}
          onClick={() => document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' })}
          sx={{ px: { xs: 3, sm: 4 }, py: { xs: 1, sm: 1.5 }, fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.1rem' }, color: '#F2EAE4', backgroundColor: '#1A2526', borderRadius: 10 }} 
        >
          Ver proyectos
        </Button>
      </Box>
    </Box>
  );
};

export default Header;