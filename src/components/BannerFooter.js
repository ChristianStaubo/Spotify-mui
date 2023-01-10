import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function BannerFooter() {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',p:1,position:'fixed',left:0,bottom:0,background: 'linear-gradient(to right bottom, #430089, #82ffa1)',width:'100%',color:'white','&:hover':{
        cursor:'pointer'
    }}}>
        <Box sx={{display:'flex',flexDirection:'column',gap:1,justifyContent:'center',p:1}}>
            <Typography sx={{fontSize:'14px'}}>PREVIEW OF SPOTIFY</Typography>
            <Typography>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</Typography>
        </Box>
        <Button sx={{my:'auto',color:'black',backgroundColor:'white',borderRadius:10,height:'45px',width:'150px',textTransform:'none',fontWeight:600,mr:2,'&:hover':{
            transform:'scale(1.05)',
            backgroundColor:'white'
        }}}>Sign up free</Button>
    </Box>
  )
}

export default BannerFooter