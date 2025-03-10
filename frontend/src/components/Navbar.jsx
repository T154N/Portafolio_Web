import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Stack, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';
import NavListDrawer from "./NavListDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [title, setTitle] = useState("Inicio");

  const navLinks = [
    { title: "Inicio", path: "/", icon: <HomeIcon /> },
    { title: "Contacto", path: "/contact", icon: <ContactMailIcon /> },
    { title: "Proyectos", path: "/projects", icon: <WorkIcon /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (title) => {
    setTitle(title);
    setOpen(false); // Cierra el Drawer al hacer clic en un enlace
  };

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{
          top: scrolled ? 10 : 5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? '90%' : '99%',
          borderRadius: scrolled ? 3 : 3,
          boxShadow: scrolled ? 3 : 0,
          backgroundColor: scrolled ? 'rgba(25, 118, 210, 0.8)' : 'rgba(25, 118, 210, 1)',
          height: '60px',
          transition: 'all 0.2s linear',
        }}
      >
        <Toolbar sx={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
    <IconButton 
      color="inherit" 
      size="large" 
      onClick={() => setOpen(true)} 
      sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }} // Margen derecho para separar el ícono del texto
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">{title}</Typography>
  </Box>
  <Box sx={{ display: { xs: "none", sm: "block" }, ml: 'auto' }}>
    {navLinks.map(item => (
      <Button 
        color="inherit" 
        key={item.title} 
        component={Link} 
        to={item.path}
        onClick={() => handleButtonClick(item.title)}
      >
        <Stack direction="column" alignItems="center">
          {item.icon}
          <Typography variant="caption">{item.title}</Typography>
        </Stack>
      </Button>
    ))}
  </Box>
</Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} handleButtonClick={handleButtonClick} />
      </Drawer>

      <Box sx={{ height: '60px' }} /> {/* Espacio para el AppBar */}
    </>
  );
}