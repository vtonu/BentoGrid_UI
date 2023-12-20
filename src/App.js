import FixedSpacing from './components/masonryUI';
import OutlinedCard from './components/masonryCardImages';
import Box from '@mui/material/Box';
import HeaderCardOutline from './components/headerCard';

function App() {
  return (
    <div
      className="App"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
      <Box sx={{ pt: 2 }}>
        {/* <FixedSpacing /> */}
        <HeaderCardOutline />
        <OutlinedCard />
      </Box>
    </div>
  );
}

export default App;
