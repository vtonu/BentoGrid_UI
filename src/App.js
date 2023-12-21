/* import FixedSpacing from './components/masonryUI'; */
import Box from '@mui/material/Box';
import HeaderCardOutline2 from './components/wholeGUIBox';

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
      <HeaderCardOutline2></HeaderCardOutline2>
      <Box sx={{ pt: 2 }}>{/* <FixedSpacing /> */}</Box>
    </div>
  );
}
export default App;
