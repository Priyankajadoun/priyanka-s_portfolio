
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "./Nav.css"
import logo from '../../assets/img/w (6).png'; // Adjust path as needed


const pages = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <div className='navbar'>
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
      <Container maxWidth="xl">
       
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between' }}>
  {/* Logo - Left */}
  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 2 }}>
    <img src={logo} alt="Logo" className="nav-logo"  />
  </Box>

  {/* Center Nav Items - Middle */}
  <Box sx={{
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    flexGrow: 1,
    gap: 2,
  }}>
    {pages.filter(p => p.id !== 'contact').map((page) => (
      <Button
        key={page.id}
        onClick={handleCloseNavMenu}
        href={`#${page.id}`}
        sx={{ color: 'white' }}
      >
        {page.label}
      </Button>
    ))}
  </Box>

  {/* Contact Button - Right */}
  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
    <Button
      onClick={handleCloseNavMenu}
      href="#contact"
      variant="contained"
      size="small"
      sx={{
        backgroundColor: '#fff',
        color: '#44005a',
        fontWeight: 'bold',
        '&:hover': { backgroundColor: '#f5f5f5' }
      }}
    >
      Contact Me
    </Button>
  </Box>

  {/* Mobile Hamburger Menu - Visible Only on XS/SM */}
  <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
    <IconButton
      size="large"
      aria-label="menu"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
    >
      {pages.map((page) => (
        <MenuItem key={page.id} onClick={handleCloseNavMenu}>
          {page.id === 'contact' ? (
            <Button
              href={`#${page.id}`}
              variant="contained"
              size="small"
              sx={{ width: '100%', color: '#fff', backgroundColor: '#44005a', '&:hover': { backgroundColor: '#330044' } }}
            >
              Contact Me
            </Button>
          ) : (
            <Typography
              component="a"
              href={`#${page.id}`}
              sx={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'none', color: '#44005ad9' }}
            >
              {page.label}
            </Typography>
          )}
        </MenuItem>
      ))}
    </Menu>
  </Box>
</Toolbar>

      </Container>
    </AppBar>
    </div>
  );
}
export default Nav;




