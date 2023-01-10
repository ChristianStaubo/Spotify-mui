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
          <ArrowBackIosNewIcon sx={{color:'#828282',display:{xs:'none',lg:'block',},transform:'rotate(180deg)','&:hover': {
            cursor:'not-allowed'
          }}}/> 
        </Box>
      </Box>
        

        
        
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:{xs:'none',md:'flex'},mr:10}}>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              transform:'scale(1.05)',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Premium</Button>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              transform:'scale(1.05)',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Support</Button>
            <Button sx={{color:'#8e8e8e',textTransform:'none','&:hover':{
              color:'white',
              fontWeight:'500',
              transform:'scale(1.05)',
              cursor:'auto'
              
            },fontSize:'17px',letterSpacing:1}}>Download</Button>
            <Box sx={{width:'1px',height:'25px',backgroundColor:'white',my:'auto',ml:10}}></Box>
        </Box>
            <Box sx={{mr:{xs:1,md:8,lg:1},pr:1,display:{xs:'none',sm:'flex',md:'block'},alignItems:'center'}}>

            <Button sx={{borderRadius:40,py:1.5,px:3,color:'#a7a7a7',textTransform:'none','&:hover':{
              backgroundColor:'#0f0f0f',
              fontWeight:'700',
              transform:'scale(1.05)',
              cursor:'auto',
              color:'white'

              
            }}}>Sign up</Button>
            <Button sx={{borderRadius:40,py:1.5,px:3,backgroundColor:'white',color:'black',textTransform:'none',fontWeight:'600','&:hover':{
            transform:'scale(1.05)',
            backgroundColor:'white'
        },mr:{lg:1}}}>Log in</Button>
            <MenuIcon sx={{ml:1,display:{xs:'block',md:'none',color:'white','&:hover':{
                    cursor:'pointer'
                }}}}/>
            </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default Navbar