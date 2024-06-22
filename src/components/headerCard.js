import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const card = (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <img src={require('./logo.png')} width="50" alt="logo" />
        <Typography variant="h4" sx={{ color: 'pink', pt: 2 }} fontWeight={300}>
          A New GTA VI Experience
        </Typography>
        <Typography variant="h5" sx={{ color: '#white' }} fontWeight={700}>
          Powered by SIX Multiplayer
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#white', pt: 2 }} fontWeight={300}>
          Welcome to SIX Multiplayer! We are currently in development. Stay tuned for updates!
        </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function HeaderCardOutline() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
