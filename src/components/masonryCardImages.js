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
    <Box sx={{ width: 550, pt: 2 }}>
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
  'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/trevor-gta-5-chromebook-wallpaper.jpg',
  'https://funmauj.b-cdn.net/test/506460.jpg',
  'https://images.hdqwalls.com/wallpapers/gta-5-rockstar-games-on.jpg',
  'https://e0.pxfuel.com/wallpapers/820/662/desktop-wallpaper-gta-v-city-buildings-art-u-gta-5-city.jpg',
  'https://cdn.wccftech.com/wp-content/uploads/2022/03/WCCFgtav5.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/248/271/desktop-wallpaper-gta-v-iphone-trick-gta-5-phone.jpg',
  'https://funmauj.b-cdn.net/test/506460.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCNwujpuh1p90FgjGLsnn4B4l5hkQP-Jgcg&usqp=CAU',
  'https://w0.peakpx.com/wallpaper/944/610/HD-wallpaper-michael-gta-5-gta-5-gta-v-games.jpg',
];
