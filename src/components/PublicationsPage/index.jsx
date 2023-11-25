import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';

import './style.css';
import publicationGroups from '../../data/publications.json';


function publicationString(publication) {
  return publication.authors.join(', ') + '. ' + publication.title
}

export default function PublicationsPage() {
  return (
    <div>
      <h1>Publications</h1>
      {publicationGroups.map((group) => (
        <div>
          <h2>{group.groupName}</h2>
          <Box sx={{ width: '100%', minWidth: 650, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                {group.publications.map((publication) => (
                <ListItem disablePadding divider>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={publicationString(publication)} />
                  </ListItemButton>
                </ListItem>
                ))}
              </List>
            </nav>
          </Box>
        </div>
      ))}
    </div>
  )
}