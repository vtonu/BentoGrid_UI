import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const pinkBox = {
  '&:hover': {
    border: '1px solid pink',
    borderRadius: '3px',
  },
};

export default function OutlinedCard({ imageUrl }) {
  return (
    <Box sx={pinkBox}>
      <Card variant="outlined" sx={{ pinkBox }}>
        <CardContent sx={{ padding: 0.8 }}>
          <img
            src={imageUrl}
            alt="Outlined Card"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
