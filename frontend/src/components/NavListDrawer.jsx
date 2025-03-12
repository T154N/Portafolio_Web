import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';

const defaultNavLinks = [
  { title: 'Inicio', path: '/', icon: <HomeRoundedIcon /> },
  { title: 'Proyectos', path: '/projects', icon: <WorkRoundedIcon /> },
  { title: 'Contacto', path: '/contact', icon: <ContactMailRoundedIcon /> }
];

export default function NavListDrawer({ navLinks = defaultNavLinks, handleButtonClick }) {
  return (
    <Box 
      sx={{ 
        width: 250,
        backgroundColor: 'rgba(26, 37, 38, 0.01)', // Darker blue with transparency
        borderRadius: '8px',
        padding: '16px 0',
        color: '#E4E7EB' // Silver/gray
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Navegación
      </Typography>
      <Divider sx={{ borderColor: 'rgba(26, 37, 38, 0.1)' }} />
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton 
                component={Link} 
                to={item.path} 
                onClick={() => handleButtonClick(item.path)}
                sx={{
                  margin: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#E4E7EB' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#E4E7EB'
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}