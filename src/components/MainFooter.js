import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

function MainFooter() {
  return (
    <Box sx={{display:{xs:'block',sm:'flex',justifyContent:'space-between',color:'white'}}}>

    
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xs:'start'},gap:4}}>
        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Company</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography>About</Typography>
                <Typography>Jobs</Typography>
                <Typography>For the Record</Typography>
            </Box>
        </Box>

        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Communities</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography>For Artists</Typography>
                <Typography>Developers</Typography>
                <Typography>Advertising</Typography>
                <Typography>Investors</Typography>
                <Typography>Vendors</Typography>
            </Box>
        </Box>

        <Box>
            <Box sx={{pb:2}}>
                <Typography fontSize='large'>Useful links</Typography>
                </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
                <Typography>Support</Typography>
                <Typography>Free Mobile App</Typography>
            </Box>
        </Box>
    </Box>

    {/* ICON SECTION */}
    <Box sx={{display:'flex',justifyContent:'center',gap:2,mt:{xs:2,sm:0}}}>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
    </Box>
    
    </Box>
  )
}

export default MainFooter