import { Box, Typography } from '@mui/material';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Box sx={{display:'flex',flexDirection:'row'}}>
        {/* Sidebar section */}
          <Sidebar />
        {/* Navbar and main section */}
        <Box sx={{width:'100%'}}>
          <Navbar />
          <Main />
        </Box>
      </Box>
      {/* Sidebar */}
      {/* Main */}
    </div>
  );
}

export default App;
