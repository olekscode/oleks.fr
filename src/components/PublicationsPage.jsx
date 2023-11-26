import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';

import publicationGroups from '../data/publications.json';


function publicationString(publication) {
  return publication.authors.join(', ') + '. ' + publication.title
}

export default function PublicationsPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Publications</Typography>
      {publicationGroups.map((group) => (
        <div>
          <Typography variant="h5" gutterBottom>{group.groupName}</Typography>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                {group.publications.map((publication) => (
                <ListItem key={publication.id} disablePadding divider>
                  <ListItemButton key={publication.id}>
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