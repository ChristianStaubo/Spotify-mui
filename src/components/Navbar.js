import { Box, Button, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

function Navbar() {
  return (
    <Box sx={{height:'60px',backgroundColor:'#0f0f0f'}}>

    
    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',height:'100%',justifyContent:'space-between'}}>
      <Box sx={{display:'flex'}}>
        <Box sx={{ml:1,p:0.5,borderRadius:'100%',backgroundColor:'#090909'}}>
          <ArrowBackIosNewIcon sx={{color:'#828282','&:hover': {
            cursor:'not-allowed'
          }}}/> 
        </Box>
        <Box sx={{ml:1,p:0.5,borderRadius:'100%',backgroundColor:'#090909'}}>
          <ArrowBackIosNewIcon sx={{color:'#828282',display:{xs:'none',md:'block',},transform:'rotate(180deg)','&:hover': {
            cursor:'not-allowed'
          }}}/> 
        </Box>
      </Box>
        

        
        
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:{xs:'none',md:'flex'},mr:10}}>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Premium</Button>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Support</Button>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Download</Button>
            <Box sx={{width:'1px',height:'25px',backgroundColor:'white',my:'auto',ml:10}}></Box>
        </Box>
            <Button sx={{borderRadius:40,py:1,px:2.5,color:'#a7a7a7',textTransform:'none','&:hover':{
              backgroundColor:'#0f0f0f',
              fontWeight:'700',
              
              cursor:'auto',
              color:'white'

              
            }}}>Sign up</Button>
            <Button sx={{borderRadius:40,py:1,px:2.5,backgroundColor:'white',color:'black',textTransform:'none',fontWeight:'600','&:hover':{
              backgroundColor:'white',
              fontWeight:'700',
              
              cursor:'auto'

              
            },mr:{lg:1}}}>Log in</Button>
            <MenuIcon sx={{ml:1,display:{xs:'block',md:'none'}}}/>
        </Box>
    </Box>
    </Box>
  )
}

export default Navbar