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
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            Safe
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            Disk
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            Info
          </Button>
        </Box>
        <Box
          sx={{
            pl: 1,
          }}>
          <Button variant="outlined" sx={{ color: '#fbc02d' }} color="error" size="small">
            Storage
          </Button>
        </Box>

        <Box>
          <Button
            variant="outlined"
            sx={{ color: '#fbc02d', minWidth: 0 }}
            color="error"
            size="small">
            <CloseOutlinedIcon sx={{ color: '#fbc02d', p: 0.5 }}></CloseOutlinedIcon>
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
