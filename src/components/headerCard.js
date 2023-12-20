import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography sx={{ fontSize: 13 }} color="text.secondary">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <ButtonGroup variant="text" aria-label="text button group" color="inherit" size="small">
            <Button>HOME</Button>
            <Button>ABOUT</Button>
            <Button>INFO</Button>
          </ButtonGroup>
        </Box>
      </Typography>
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
