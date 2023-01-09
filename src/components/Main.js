import { Box, Card, CardMedia, Typography } from '@mui/material'
import peaceFulPianoImg from '../assets/spotifyPeacefulPiano.jpg'
import DeepFocusImg from '../assets/spotifyDeepFocus.jpg'
import InstrumentalImg from '../assets/spotifyInstrumentalStudy.jpg'
import chillLofi from '../assets/spotifyChillLofiStudy.jpg'
import jazzVibes from '../assets/spotfiyJazzVibes.jpg'
import codingMusic from '../assets/spotifyCodingMode.jpg'
import focusFlow from '../assets/spotifyFocusFlow.jpg'

import XsCards from './mainCards/XsCards'
import React from 'react'
import SmCards from './mainCards/SmCards'
import MdCards from './mainCards/MdCards'
import LgCards from './mainCards/LgCards'
import Md2Cards from './mainCards/Md2Cards'
import MainFooter from './MainFooter'


let focusCards = [{title:'Peaceful Piano',text:'Relax and indulge with beautiful piano pieces',img:peaceFulPianoImg},{title:'Deep Focus',text:'Keep calm and focus with ambient and post-rock...',img:DeepFocusImg},{title:'Instrumental Study',text:'Focus with soft study music in the background.',img:InstrumentalImg},{title:'chill lofi study beats',text:'The perfect study beats. Find your focus,crush...',img:chillLofi},{title:'Jazz Vibes',text:'The original chill instrumental beats...',img:jazzVibes},{title:'Coding Music',text:'Dedicated to all the programmers out there.',img:codingMusic},{title:'Focus Flow',text:'Uptempo instrumental hip hop beats.',img:focusFlow},]
function Main() {
  return (
    <Box sx={{backgroundColor:'#161616'}}>

        {/* First card section */}
        <Box sx={{pl:2,py:2}}>
            <Box sx={{display:'flex',justifyContent:'space-between',color:'white',alignItems:'center',p:2,backgroundColor:'#1d1d1d'}}>
                <Typography fontSize={20} fontWeight={600} >Focus</Typography>
                <Typography sx={{mr:{xs:4,sm:1},fontSize:{xs:11,sm:14},color:'#a7a7a7'}}>SHOW ALL</Typography>
            </Box>
            {/* CARD SECTION */}
            <Box sx={{display:{xs:'flex',sm:'none'},gap:1,width:'100%',justifyContent:'space-between'}}>
                <XsCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',sm:'flex',md:'none'},justifyContent:'space-between'}}>
                <SmCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',md:'flex',md2:'none'},justifyContent:'space-between',width:'100%'}}>
                <MdCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',md2:'flex',xl:'none'},justifyContent:'space-between',width:'100%'}}>
                <Md2Cards focusCards={focusCards}/>
            </Box>


            <Box sx={{display:{xs:'none',xl:'flex'},justifyContent:'space-between',width:'100%'}}>
                <LgCards focusCards={focusCards}/>
            </Box>
            
        </Box>

        {/* Second card section */}
        <Box sx={{pl:2,py:2}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography>Spotify Playlists</Typography>
            </Box>
            {/* CARD SECTION */}
            <Box sx={{display:{xs:'flex',sm:'none'},gap:1,width:'100%',justifyContent:'space-around'}}>
                <XsCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',sm:'flex',md:'none'},justifyContent:'space-between'}}>
                <SmCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',md:'flex',md2:'none'},justifyContent:'space-between',width:'100%'}}>
                <MdCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',md2:'flex',xl:'none'},justifyContent:'space-between',width:'100%'}}>
                <Md2Cards focusCards={focusCards}/>
            </Box>


            <Box sx={{display:{xs:'none',xl:'flex'},justifyContent:'space-between',width:'100%'}}>
                <LgCards focusCards={focusCards}/>
            </Box>
            
        </Box>
        <Box sx={{pl:2,py:2}}>
            <MainFooter />
        </Box>
        
    </Box>
  )
}

export default Main