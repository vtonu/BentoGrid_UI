import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HeaderCardOutline from './headerCard';
import OutlinedCard from './masonryCardImages';
import FooterCardOutline from './footerCard';

const card = (
  <React.Fragment>
    <CardContent>
      <HeaderCardOutline />
      <OutlinedCard />
      <FooterCardOutline />
    </CardContent>
  </React.Fragment>
);

export default function HeaderCardOutline2() {
  return (
    <Box sx={{ minWidth: 175 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
