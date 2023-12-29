/* import FixedSpacing from './components/masonryUI'; */
import HeaderCardOutline2 from './components/wholeGUIBox';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

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
      {/* <Box sx={{ pt: 2 }}>
        {' '}
        <FixedSpacing />{' '}
      </Box> */}
      <ThemeProvider theme={theme}>
        <HeaderCardOutline2></HeaderCardOutline2>
      </ThemeProvider>
    </div>
  );
}
export default App;
