import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './style.css';
import * as ROUTES from '../../constants/routes';


export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Oleksandr Zaitsev
          </Typography>
          <Button component={Link} to={ROUTES.LANDING} color="inherit">Home</Button>
          <Button component={Link} to={ROUTES.PUBLICATIONS} color="inherit">Publications</Button>
          <Button component={Link} to={ROUTES.SOFTWARE} color="inherit">Software</Button>
          <Button component={Link} to={ROUTES.TEACHING} color="inherit">Teaching</Button>
          <Button component={Link} to={ROUTES.TALKS} color="inherit">Talks</Button>
          <Button component={Link} to={ROUTES.BLOG} color="inherit">Blog</Button>
          <Button component={Link} to={ROUTES.CV} color="inherit">CV</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}