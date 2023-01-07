import { Box, Card, CardMedia, Typography } from '@mui/material'
import peaceFulPianoImg from '../assets/spotifyPeacefulPiano.jpg'
import React from 'react'

function Main() {
  return (
    <Box>

        {/* First card section */}
        <Box sx={{pl:2,py:2}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography>Focus</Typography>
                <Typography sx={{mr:1}}>SHOW ALL</Typography>
            </Box>
            {/* CARD SECTION */}
            <Box sx={{display:'flex',gap:1}}>
                <Card sx={{width:150,p:2}}>
                    <CardMedia 
                    component='img'
                    
                    src={peaceFulPianoImg} />
                    <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:2}}>
                        <Typography>Peaceful Piano</Typography>
                        <Typography variant='caption'>Relax and induldge with beautiful piano pieces</Typography>
                    </Box>
                    
                </Card>

                <Card sx={{width:150,p:2}}>
                    <CardMedia 
                    component='img'
                    
                    src={peaceFulPianoImg} />
                    <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:2}}>
                        <Typography>Peaceful Piano</Typography>
                        <Typography variant='caption'>Relax and induldge with beautiful piano pieces</Typography>
                    </Box>
                    
                </Card>
                
            </Box>
        </Box>
    </Box>
  )
}

export default Main