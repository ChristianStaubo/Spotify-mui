import { Avatar, Box, Button, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'

function Sidebar() {
  return (
    <Box sx={{minWidth:'100px',width:'100px',display:'flex',flexDirection:'column',gap:4}}>
        {/* Logo header */}
        <Box sx={{display:'flex',flexDirection:'row'}}>
            <Avatar src='#' alt='#'/>
            <Typography>Spotify</Typography>
        </Box>


        {/* Home search and you... section */}
        <Box >
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1}}>
                <HomeIcon fontSize='large'/>
                <Typography>Home</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1}}>
                <HomeIcon fontSize='large'/>
                <Typography>Sea...</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1}}>
                <HomeIcon fontSize='large'/>
                <Typography>You...</Typography>
            </Box>
            
        </Box>

        {/* Create like section */}
        <Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1}}>
                    <HomeIcon fontSize='large'/>
                    <Typography>Cre...</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1}}>
                    <HomeIcon fontSize='large'/>
                    <Typography>Like...</Typography>
                </Box>
        </Box>


        {/* Footer section */}
        <Box sx={{display:'flex',flexDirection:'column',gap:2,fontSize:10,justifyContent:'center',ml:2}}>
            <Typography sx={{fontSize:11}}>Legal</Typography>

            <Box>
                <Typography sx={{fontSize:11}}>Privacy</Typography>
                <Typography sx={{fontSize:11}}>Center</Typography>
            </Box>

            <Box>
                <Typography sx={{fontSize:11}}>Privacy</Typography>
                <Typography sx={{fontSize:11}}>Policy</Typography>
            </Box>

            <Typography sx={{fontSize:11}}>Cookies</Typography>

            <Typography sx={{fontSize:11}}>About Ads</Typography>

            <Typography sx={{fontSize:11}}>Your Privacy Choices</Typography>

            <Typography sx={{fontSize:11}}>Cookies</Typography>
        </Box>
    </Box>
  )
}

export default Sidebar