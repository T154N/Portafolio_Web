import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import { Link } from 'react-router-dom';
import NavListDrawer from "./NavListDrawer";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const navLinks = [
    { title: "Inicio", path: "#inicio", icon: <HomeRoundedIcon /> },
    { title: "Proyectos", path: "#proyectos", icon: <WorkRoundedIcon /> },
    { title: "Contacto", path: "#contacto", icon: <ContactMailRoundedIcon /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => document.querySelector(link.path));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setActiveItem(navLinks[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleButtonClick = (path) => {
    setActiveItem(path);
    setOpen(false);
    document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        zIndex: 1100,
        transition: 'all 0.3s ease-in-out',
      }}>
        <AppBar 
          position="static"
          elevation={0}
          component={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(26, 37, 38, 0.75)', // Darker blue with transparency
            borderBottom: '1px solid rgba(26, 37, 38, 0.75)',
            height: '60px',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Toolbar sx={{ 
            minHeight: '60px', 
            display: 'flex', 
            justifyContent: 'center',
            px: 2 
          }}>
            <IconButton 
              color="inherit" 
              size="small" 
              onClick={() => setOpen(true)} 
              sx={{ 
                display: { xs: "flex", md: "none" }, 
                position: 'absolute',
                left: 16,
                color: '#E4E7EB' // Silver/gray
              }} 
            >
              <MenuRoundedIcon />
            </IconButton>
            
            <Box sx={{ 
              display: { xs: "none", md: "flex" }, 
              gap: 1,
              justifyContent: 'center'
            }}>
              {navLinks.map(item => (
                <Button 
                  key={item.title} 
                  onClick={() => handleButtonClick(item.path)}
                  sx={{
                    color: activeItem === item.path ? '#FFFFFF' : '#B3B8C0', // White when active, lighter gray when inactive
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                    }
                  }}
                >
                  {activeItem === item.path && (
                    <Box
                      component={motion.div}
                      layoutId="navbar-active"
                      initial={false}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(26, 37, 38, 0.75)',
                        zIndex: -1
                      }}
                    />
                  )}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    gap: 1
                  }}>
                    {item.icon}
                    <Typography 
                      variant="body2" 
                      fontWeight={activeItem === item.path ? 600 : 400}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(26, 37, 38, 0.75)', // Darker blue
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(26, 37, 38, 0.75)',
          }
        }}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} handleButtonClick={handleButtonClick} />
      </Drawer>

      <Box sx={{ height: '60px' }} /> {/* Space for the AppBar */}
    </>
  );
}
