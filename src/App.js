import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import BannerFooter from './components/BannerFooter';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      sm2:800,
      md: 900,
      md2: 1100,
      lg: 1200,
      xl: 1536,
      xl2:1550,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme} sx={{height:'100vh'}}>

    
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
      <BannerFooter />
      {/* Sidebar */}
      {/* Main */}
      </ThemeProvider>
  );
}

export default App;
