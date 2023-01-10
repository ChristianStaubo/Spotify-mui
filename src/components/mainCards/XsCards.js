import { Box, Card, CardMedia, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import peaceFulPianoImg from '../../assets/spotifyPeacefulPiano.jpg'

import React, { useEffect, useState } from 'react'

// height:'40px',width:'40px',position:'absolute',backgroundColor:'blue',ml:12,mt:-8,borderRadius:'100%'

function XSCards({focusCards}) {
    const [focusCardsToDisplay,setFocusCardsToDisplay] = useState([])
  
    useEffect(() => {
        let newCards = focusCards.slice(0,2)
        setFocusCardsToDisplay(newCards)
    },[focusCards])
  return (
    <Box sx={{display:'flex',gap:1,width:'100%',justifyContent:'space-between'}}>
                {focusCardsToDisplay.map((card) => {
                    return (

                        <Card className='cardHover' 
                          sx={{width:150,p:2,backgroundColor:'#181818','&:hover':{
                            transition:'ease-in',
                            backgroundColor:'#272727'
                        }}}>
                            <CardMedia 
                            component='img'
                            
                            src={card.img} />
                            
                            <Box  className='spotifyIconBox' sx={{display:'none'}}>

                                
                            <Box  sx={{height:'40px',width:'30px',position:'absolute',ml:12.5,mt:-6,borderRadius:'50%','&:hover':{
                                backgroundColor:'blue'
                  
                            },backgroundColor:'black'}}>
                            </Box>
                            
                            <PlayCircleIcon sx={{width:'55px',color:'#1ec95b',height:'55px',position:'absolute',ml:11.5,mt:-7,borderRadius:'50%',}}/>
                            </Box> : ''
                            
                                
                            <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:2}}>
                                <Typography color={'#fcfcfc'}>{card.title}</Typography>
                                <Typography variant='caption' color={'#909090'}>{card.text}</Typography>
                            </Box>
                            
                        </Card>
        
                    )
                })}
                
                
            </Box>
  )
}

export default XSCards