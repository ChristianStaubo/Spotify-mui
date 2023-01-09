import { Box, Card, CardMedia, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import peaceFulPianoImg from '../../assets/spotifyPeacefulPiano.jpg'

import React from 'react'

// height:'40px',width:'40px',position:'absolute',backgroundColor:'blue',ml:12,mt:-8,borderRadius:'100%'

function XSCards() {
  return (
    <Box sx={{display:'flex',gap:1,width:'100%',justifyContent:'space-between'}}>
                <Card  sx={{width:150,p:2,backgroundColor:'#181818','&:hover':{
                    transition:'ease-in',
                    backgroundColor:'#272727'
                }}}>
                    <CardMedia 
                    component='img'
                    
                    src={peaceFulPianoImg} />
                    
                        <PlayCircleIcon  sx={{color:'#1ec95b',height:'55px',width:'55px',position:'absolute',ml:11.5,mt:-7,borderRadius:'100%','&:hover':{
                            backgroundColor:'blue'
              
                        }}}/>
                    
                    <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:2}}>
                        <Typography color={'#fcfcfc'}>Peaceful Piano</Typography>
                        <Typography variant='caption' color={'#909090'}>Relax and induldge with beautiful piano pieces</Typography>
                    </Box>
                    
                </Card>

                <Card sx={{width:150,p:2,backgroundColor:'#181818'}}>
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

export default XSCards