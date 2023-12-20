import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

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
    <Box sx={{ width: 500 }}>
      <Masonry columns={3} spacing={1.5}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              style={{
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/916/825/130/costume-the-bandits-bag-ak-47-machines-hd-wallpaper-preview.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://i.pinimg.com/736x/52/dd/57/52dd573970ed1d0466bd256cfad8c954.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2013/07/GTA-5-Lamar-2.jpg',
    title: 'Tower',
  },
  {
    img: 'https://wallpapers.com/images/hd/iphone-xs-max-grand-theft-auto-v-background-1242-x-2688-0d9kfha0gttjqpx0.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://i.pinimg.com/564x/d8/91/1e/d8911e372fef3199ab0c45f096d2fd8e.jpg',
    title: 'Honey',
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/944/610/HD-wallpaper-michael-gta-5-gta-5-gta-v-games.jpg',
    title: 'Vinewood',
  },
  {
    img: 'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/trevor-gta-5-chromebook-wallpaper.jpg',
    title: 'Tree',
  },
  {
    img: 'https://wallpapers.com/images/hd/gta-5-starlet-mnpe4vuckvhuz4ot.jpg',
    title: 'Camera',
  },
  {
    img: 'https://e1.pxfuel.com/desktop-wallpaper/248/271/desktop-wallpaper-gta-v-iphone-trick-gta-5-phone.jpg',
    title: 'Sunset',
  },
  {
    img: 'https://funmauj.b-cdn.net/test/506460.jpg',
    title: 'Breakfast',
  },

  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCNwujpuh1p90FgjGLsnn4B4l5hkQP-Jgcg&usqp=CAU',
    title: 'Kiss',
  },
  {
    img: 'https://cdn.wccftech.com/wp-content/uploads/2022/03/WCCFgtav5.jpg',
    title: 'Last One',
  },
];
