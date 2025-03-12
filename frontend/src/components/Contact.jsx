import React from 'react';
import { Box, Typography, Grid, TextField, Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <Box 
      id="contacto"
      sx={{ 
        minHeight: '100vh',
        py: { xs: 0, md: 5 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1800px',
        mx: 'auto',
        px: { xs: 2, md: 4 }
      }}
    >
      <Typography 
        variant="h3" 
        component="h2" 
        textAlign="center" 
        gutterBottom 
        mb={8}
        sx={{ fontSize: { xs: '2rem', sm: '2.5rem', lg: '3.2rem' } }}
      >
        Contacto
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={6} lg={5}>
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontSize: { lg: '1.8rem' } }}>
              ¿Tienes un proyecto en mente?
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { lg: '1.1rem' } }}>
              Estoy disponible para trabajar en proyectos freelance y oportunidades a tiempo completo. 
              Si tienes una idea o necesitas ayuda con tu proyecto, no dudes en contactarme.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { lg: '1.1rem' } }}>
              También puedes encontrarme en:
            </Typography>
            
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button 
                variant="outlined" 
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/santiago-b-arias"
                target="_blank"
                size="large"
                sx={{ fontSize: { lg: '1rem' } }}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<GitHubIcon />}
                href="https://github.com/T154N"
                target="_blank"
                size="large"
                sx={{ fontSize: { lg: '1rem' } }}
              >
                GitHub
              </Button>
            </Stack>
            
            <Typography variant="body1" sx={{ fontSize: { lg: '1.1rem' } }}>
              Email: santiagoarias.personal@gmail.com
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} lg={5}>
          <Box component="form" noValidate sx={{ maxWidth: '650px', mx: 'auto' }}>
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              variant="outlined"
              sx={{ mb: 2.5, '& .MuiInputBase-root': { fontSize: { lg: '1.1rem' } } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              type="email"
              sx={{ mb: 2.5, '& .MuiInputBase-root': { fontSize: { lg: '1.1rem' } } }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mensaje"
              variant="outlined"
              multiline
              rows={5}
              sx={{ mb: 2.5, '& .MuiInputBase-root': { fontSize: { lg: '1.1rem' } } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              sx={{ mt: 2, px: 4, py: 1.5, fontSize: { lg: '1.1rem' }, borderRadius: 10 , backgroundColor: '#1A2526' }} 
            >
              Enviar mensaje
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;