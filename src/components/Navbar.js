import { Box, Button, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

function Navbar() {
  return (
    <Box sx={{height:'50px'}}>

    
    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',height:'100%',justifyContent:'space-between'}}>
        <ArrowBackIosNewIcon sx={{ml:1}}/>
        
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button>Sign up</Button>
            <Button>Log in</Button>
            <MenuIcon sx={{ml:1}}/>
        </Box>
    </Box>
    </Box>
  )
}

export default Navbar