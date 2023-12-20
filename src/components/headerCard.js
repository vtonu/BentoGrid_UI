import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

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
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            HOME
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            INFO
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            STORAGE
          </Button>
        </Box>

        <Box>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            <CloseOutlinedIcon sx={{ color: '#fbc02d', p: 0.4 }}></CloseOutlinedIcon>
          </Button>
        </Box>
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
