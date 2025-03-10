import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function NavListDrawer({ navLinks, handleButtonClick }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton 
                component={Link} 
                to={item.path} 
                onClick={() => handleButtonClick(item.title)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}