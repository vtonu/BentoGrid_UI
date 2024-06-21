import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import OutlinedCard from './outlinedCardImages';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function FixedSpacing() {
  return (
    <Box sx={{ width: 520, pt: 2 }}>
      <Masonry columns={3} spacing={1}>
        {itemData.map((item, index) => (
          <div key={index}>
            <OutlinedCard imageUrl={item} />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  'https://images.hindustantimes.com/tech/img/2024/06/20/960x540/GTA_6_launch_detail_1718880389070_1718880389479.png',
  'https://videogames.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAyNjkwMjEwODMwNDkyNjg0/gta-6-highway-1.png',
  'https://images.hindustantimes.com/tech/img/2024/06/20/960x540/GTA_6_launch_detail_1718880389070_1718880389479.png',
  'https://images.hindustantimes.com/tech/img/2024/06/12/960x540/GTA_6_Trailer_2_expected_soon_1718191446863_1718191447601.png',
  'https://gta6intel.com/wp-content/uploads/2024/05/Lucia-and-Jason-Guns-Out-Robbing-Store-in-GTA-6.jpg',
  'https://videogames.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAyNjkwMjEwODMwNDkyNjg0/gta-6-highway-1.png',
];
