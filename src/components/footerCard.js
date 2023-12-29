import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const card = (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button
            variant="outlined"
            sx={{ color: '#fbc02d', width: '100px' }}
            color="error"
            size="small">
            ABOUT
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button
            variant="outlined"
            sx={{ color: '#fbc02d', width: '100px' }}
            color="error"
            size="small">
            DISCORD
          </Button>
        </Box>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function FooterCardOutline() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
