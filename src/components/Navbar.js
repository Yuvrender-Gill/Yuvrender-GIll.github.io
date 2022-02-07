import * as React from 'react';
import { useNavigate  } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import { Button, Stack  } from '@mui/material';
import Container from '@mui/material/Container';


// Configs
import { navbarItemsConfig } from '../configs/NavbarConfigs';


const theme = {
  box:{
    sx: { 
      // flexGrow: 1, 
      display: { xs: 'none', md: 'flex' },
      cursor:'pointer',
      float: 'right',
    }
  },
  authorName:{
    sx:{
      
    }
  }
}

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate ();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
   
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters spacing={3} >
        <Typography
          variant="h3"
          noWrap
          component="div"
          onClick={() => navigate(navbarItemsConfig[0].navItemLink)}
          sx={{ flexGrow: 1 }}
        >
          {
            navbarItemsConfig[0].navItem // LOGO
          }
        </Typography>
        
        <Stack direction="row"  sx={theme.box.sx} px={5} spacing={3}>
          {navbarItemsConfig.slice(1).map((page) => (
            
              <Typography
                key={page.navItem}
                onClick={() => page.externalLink ? window.location.href = page.navItemLink : navigate(page.navItemLink) }
              >
                {page.navItem}
              </Typography>
            
          ))}
        </Stack >
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
