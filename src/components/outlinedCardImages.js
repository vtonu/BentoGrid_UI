import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function OutlinedCard({ imageUrl }) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <Card variant="outlined">
        <CardContent sx={{ padding: 0.9 }}>
          <img
            src={imageUrl}
            alt="Outlined Card"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
