import { Avatar, Box, Button, Typography } from '@mui/material'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

function Sidebar() {
  return (
    <Box sx={{minWidth:'120px',width:'120px',display:'flex',flexDirection:'column',gap:4,color:'white',backgroundColor:'black'}}>
        {/* Logo header */}
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',mt:2,gap:0.5,'&:hover':{
              cursor:'pointer'
            }}}>
            <HeadphonesIcon sx={{fontSize:'30px'}}/>
            <Typography fontSize='medium'>Spotify</Typography>
        </Box>


        {/* Home search and you... section */}
        <Box >
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1,p:0.5,'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>
                <HomeIcon sx={{fontSize:'30px'}}/>
                <Typography fontSize='small' sx={{fontWeight:'500'}}>Home</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1,p:0.5,'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>
                <SearchIcon sx={{fontSize:'30px'}}/>
                <Typography fontSize='small' sx={{'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>Sea...</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:1,p:0.5}}>
                <PlaylistAddIcon sx={{fontSize:'30px'}} />
                <Typography fontSize='small' sx={{'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>You...</Typography>
            </Box>
            
        </Box>

        {/* Create like section */}
        <Box sx={{pb:10,display:'flex',flexDirection:'column',gap:1,'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:2}}>
                    <Box sx={{backgroundColor:'#b2b2b2'}}>
                        <AddIcon  sx={{color:'#595959',p:0.2,fontSize:'20px',}}/>
                    </Box>
                    
                    <Typography fontSize='small' sx={{'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>Cre...</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:2,'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>
                    <Box sx={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)',display:'flex',justifyContent:'center'}}>
                        <FavoriteIcon  sx={{p:0.5,fontSize:'15px'}}/>
                    </Box>
                    
                    <Typography fontSize='small' sx={{'&:hover':{
              cursor:'pointer',
              fontWeight:'600'
            }}}>Like..</Typography>
                </Box>
        </Box>


        {/* Footer section */}
        <Box sx={{display:'flex',flexDirection:'column',gap:2,fontSize:10,justifyContent:'center',ml:2,color:'#959595',mt:{lg:20}}}>
            <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Legal</Typography>

            <Box>
                <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Privacy</Typography>
                <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Center</Typography>
            </Box>

            <Box>
                <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Privacy</Typography>
                <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Policy</Typography>
            </Box>

            <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>Cookies</Typography>

            <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              
            }}}>About Ads</Typography>

            <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              fontWeight:'400',
              color:'white'
              
            }}}>Your Privacy Choices</Typography>

            <Typography sx={{fontSize:11,'&:hover':{
              cursor:'pointer',
              textDecoration:'underline'
              
            }}}>Cookies</Typography>
        </Box>
    </Box>
  )
}

export default Sidebar