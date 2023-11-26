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

import './style.css';
import * as ROUTES from '../../constants/routes';


const mastodonIcon = (
  <SvgIcon>
    {/* credit: icon from https://icons.getbootstrap.com/icons/mastodon/ */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      strokeWidth={1}
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
      />
    </svg>
  </SvgIcon>
);

const orcidIcon = (
  <SvgIcon>
    {/* credit: Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512"
      strokeWidth={1}
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z"
      />
    </svg>
  </SvgIcon>
);

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

const pages = [
  { "title": "Home", "route": ROUTES.LANDING },
  { "title": "Publications", "route": ROUTES.PUBLICATIONS },
  { "title": "Software", "route": ROUTES.SOFTWARE },
  { "title": "Teaching", "route": ROUTES.TEACHING },
  { "title": "Talks", "route": ROUTES.TALKS },
  { "title": "Blog", "route": ROUTES.BLOG },
  { "title": "CV", "route": ROUTES.CV },
];

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 0, borderTop: 1, borderBottom: 1 }}>
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
              {pages.map((page) => (
                <MenuItem key={page.title} component={Link} to={page.route} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
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