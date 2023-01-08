import { Box, Card, CardMedia, Typography } from '@mui/material'
import peaceFulPianoImg from '../../assets/spotifyPeacefulPiano.jpg'
import React from 'react'

function SmCards() {
  return (
    <Box sx={{display:'flex',gap:1,width:'100%',justifyContent:'space-evenly'}}>
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
  )
}

export default SmCards