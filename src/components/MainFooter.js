import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

function MainFooter() {
  return (
    <Box>

    
    {/* // TOP BOX OF FOOTER  */}
    <Box sx={{display:{xs:'block',sm:'flex',justifyContent:'space-between',color:'#fbfdff'}}}>

    
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xs:'start'},gap:4}}>
        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Company</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>About</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Jobs</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>For the Record</Typography>
            </Box>
        </Box>

        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Communities</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',
                    cursor:'pointer'
                }}}>For Artists</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Developers</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Advertising</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Investors</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Vendors</Typography>
            </Box>
        </Box>

        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Useful links</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Support</Typography>
                <Typography fontSize='medium' color='#909090' sx={{'&:hover':{
                    color:'#fbfdff',
                    textDecoration:'underline',cursor:'pointer'
                }}}>Free Mobile App</Typography>
            </Box>
        </Box>
    </Box>

    {/* ICON SECTION */}
    <Box sx={{display:'flex',justifyContent:'center',gap:2,mt:{xs:2,sm:0}}}>
        <InstagramIcon sx={{p:1,backgroundColor:'#292929',borderRadius:'100%','&:hover':{
            backgroundColor:'#727272'
        }}} />
        <TwitterIcon sx={{p:1,backgroundColor:'#292929',borderRadius:'100%','&:hover':{
            backgroundColor:'#727272'
        }}}/>
        <FacebookIcon sx={{p:1,backgroundColor:'#292929',borderRadius:'100%','&:hover':{
            backgroundColor:'#727272'
        }}}/>
    </Box>
    
    </Box>
        {/* BOTTOM BOX OF FOOTER */}
        <Box sx={{pt:10}}>
            <Typography color='#909090' sx={{mb:10}}>© 2023 Spotify AB</Typography>
        </Box>

    </Box>
  )
}

export default MainFooter