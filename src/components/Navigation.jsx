import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PAGES from '../constants/pages';

import { ReactComponent as OrcidSvg } from '../img/orcid.svg';
import { ReactComponent as MastodonSvg } from '../img/mastodon.svg';


function socialIconButton(icon, url) {
  return (
    <IconButton
      href={url}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      {icon}
    </IconButton>
  );
}

export default function Navigation() {
  const orcidIcon = <SvgIcon><OrcidSvg/></SvgIcon>;
  const mastodonIcon = <SvgIcon><MastodonSvg/></SvgIcon>;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="main menu"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.title} component={Link} to={page.route} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.route}
                color="inherit"
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <ButtonGroup variant="text" aria-label="icon button group">
            {socialIconButton(<GitHubIcon/>, "https://github.com/olekscode")}
            {socialIconButton(<SchoolIcon/>, "https://scholar.google.com/citations?user=slO6qqMAAAAJ")}
            {socialIconButton(orcidIcon, "https://orcid.org/my-orcid?orcid=0000-0003-0267-2874")}
            {socialIconButton(mastodonIcon, "https://mastodon.social/@oleks42")}
            {socialIconButton(<TwitterIcon/>, "https://twitter.com/oleks42")}
            {socialIconButton(<LinkedInIcon/>, "https://www.linkedin.com/in/-oleks/")}

            <Divider orientation="vertical" flexItem />

            <Button variant="text" color="inherit" startIcon={<LanguageIcon/>}>EN</Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}