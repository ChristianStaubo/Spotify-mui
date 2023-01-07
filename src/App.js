import { Box, Typography } from '@mui/material';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Box sx={{display:'flex',flexDirection:'row'}}>
        {/* Sidebar section */}
          <Sidebar />
        {/* Navbar and main section */}
      </Box>
      {/* Sidebar */}
      {/* Main */}
    </div>
  );
}

export default App;
