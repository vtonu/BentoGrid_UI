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
        <img src={require('./saeslogo.png')} width="150" alt="saeslogo" />
        <Typography variant="h4" sx={{ color: '#fbc02d', pt: 2 }} fontWeight={300}>
          A New GTA V Experience
        </Typography>
        <Typography variant="h5" sx={{ color: '#white' }} fontWeight={700}>
          Powered by RAGEMP
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#white', pt: 2 }} fontWeight={300}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie
          ipsum et, consequat nibh.
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
