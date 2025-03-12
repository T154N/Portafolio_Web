import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <Box 
      id="proyectos"
      sx={{ 
        minHeight: '100vh',
        py: { xs: 10, md: 10 },
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
        Mis Proyectos
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {/* Proyecto 1 */}
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            transition: 'transform 0.3s', 
            '&:hover': { transform: 'translateY(-8px)' },
            boxShadow: 3
          }}>
            <CardMedia
              component="img"
              height="240"
              image="https://via.placeholder.com/400x200"
              alt="Proyecto 1"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { lg: '1.7rem' } }}>
                Proyecto 1
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip size="small" label="React" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="Node.js" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="MongoDB" sx={{ mr: 0.5, mb: 0.5 }} />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: '1rem' } }}>
                Descripción...
              </Typography>
            </CardContent>
            <Box sx={{ p: 2, pt: 0 }}>
              <Button size="medium" startIcon={<GitHubIcon />} href="#" target="_blank">
                Código
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Proyecto 2 */}
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            transition: 'transform 0.3s', 
            '&:hover': { transform: 'translateY(-8px)' },
            boxShadow: 3
          }}>
            <CardMedia
              component="img"
              height="240"
              image="https://via.placeholder.com/400x200"
              alt="Proyecto 2"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { lg: '1.7rem' } }}>
                Proyecto 2
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip size="small" label="React" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="Firebase" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="Material-UI" sx={{ mr: 0.5, mb: 0.5 }} />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: '1rem' } }}>
                Descripción...
              </Typography>
            </CardContent>
            <Box sx={{ p: 2, pt: 0 }}>
              <Button size="medium" startIcon={<GitHubIcon />} href="#" target="_blank">
                Código
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Proyecto 3 */}
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            transition: 'transform 0.3s', 
            '&:hover': { transform: 'translateY(-8px)' },
            boxShadow: 3
          }}>
            <CardMedia
              component="img"
              height="240"
              image="https://via.placeholder.com/400x200"
              alt="Proyecto 3"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { lg: '1.7rem' } }}>
                Proyecto 3
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip size="small" label="Next.js" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="TypeScript" sx={{ mr: 0.5, mb: 0.5 }} />
                <Chip size="small" label="Tailwind" sx={{ mr: 0.5, mb: 0.5 }} />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: '1rem' } }}>
                Descripción...
              </Typography>
            </CardContent>
            <Box sx={{ p: 2, pt: 0 }}>
              <Button size="medium" startIcon={<GitHubIcon />} href="#" target="_blank">
                Código
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;