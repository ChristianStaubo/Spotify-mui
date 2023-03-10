import { Box, Card, CardMedia, Typography } from '@mui/material'
import peaceFulPianoImg from '../assets/spotifyPeacefulPiano.jpg'
import DeepFocusImg from '../assets/spotifyDeepFocus.jpg'
import InstrumentalImg from '../assets/spotifyInstrumentalStudy.jpg'
import chillLofi from '../assets/spotifyChillLofiStudy.jpg'
import jazzVibes from '../assets/spotfiyJazzVibes.jpg'
import codingMusic from '../assets/spotifyCodingMode.jpg'
import focusFlow from '../assets/spotifyFocusFlow.jpg'
import todayTopHits from '../assets/spotfiyTodaysTopHits.jpg'
import rapCaviar from '../assets/spotifyRapCaviar.png'
import allOut2010s from '../assets/spotifyAllOut2010s.jpg'
import rockClassics from '../assets/spotifyRockClassics.jpg'
import chillHits from '../assets/spotifyChillHits.jpg'
import vivaLatino from '../assets/spotifyVivaLatino.jpg'
import megaHitMix from '../assets/spotifyMegaHitMix.jpg'
import workdayLounge from '../assets/spotifyWorkDayLoungejpg.jpg'
import allOut80s from '../assets/spotifyAllOut80s.jpg'

import XsCards from './mainCards/XsCards'
import React from 'react'
import SmCards from './mainCards/SmCards'
import MdCards from './mainCards/MdCards'
import LgCards from './mainCards/LgCards'
import Md2Cards from './mainCards/Md2Cards'
import MainFooter from './MainFooter'
import XlCards from './mainCards/XlCards'
import Xl2Cards from './mainCards/Xl2Cards'


let focusCards = [{title:'Peaceful Piano',text:'Relax and indulge with beautiful piano pieces',img:peaceFulPianoImg},{title:'Deep Focus',text:'Keep calm and focus with ambient and post-rock...',img:DeepFocusImg},{title:'Instrumental Study',text:'Focus with soft study music in the background.',img:InstrumentalImg},{title:'chill lofi study beats',text:'The perfect study beats. Find your focus,crush...',img:chillLofi},{title:'Jazz Vibes',text:'The original chill instrumental beats...',img:jazzVibes},{title:'Coding Music',text:'Dedicated to all the programmers out there.',img:codingMusic},{title:'Focus Flow',text:'Uptempo instrumental hip hop beats.',img:focusFlow},{title:'Workday Lounge',text:'Lounge and chill out music for your workday.',img:workdayLounge}]

let spotifyPlaylists = [{title:`Today's Top Hits`,text:'RAYE is on top of the Hottest 50!',img:todayTopHits},{title:'RapCaviar',text:'Music by Moneybagg Yo, Lil Durk, Drake and 21...',img:rapCaviar},{title:'All Out 2010s',text:'The biggest songs of the 2010s',img:allOut2010s},{title:'Rock Classics',text:'Rock legends & epic songs that continue to...',img:rockClassics},{title:'Chill Hits',text:'Kick back to the best new and recent chill hits',img:chillHits},{title:'Viva Latino',text:`Today's top Latin hits, elevando nuestra m??sic`,img:vivaLatino},{title:'Mega Hit Mix',text:'A mega mix of 75 favorites from the last...',img:megaHitMix},{title:'All Out 80s',text:'the biggest songs of the 1980s',img:allOut80s}]


function Main() {
  return (
    <Box sx={{backgroundColor:'#161616'}}>

        {/* First card section */}
        <Box sx={{pl:2,py:2,mx:{sm2:5}}}>
            <Box sx={{display:'flex',justifyContent:'space-between',color:'white',alignItems:'center',p:2}}>
                <Typography fontSize={20} fontWeight={600}  sx={{'&:hover':{
                    cursor:'pointer',
                    textDecoration:'underline'
                }}}>Focus</Typography>
                <Typography sx={{mr:{xs:4,sm:1},fontSize:{xs:11,sm:14},color:'#a7a7a7',fontWeight:{sm:500},letterSpacing:1,'&:hover':{
                    cursor:'pointer',
                    textDecoration:'underline'
                }}}>SHOW ALL</Typography>
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


            <Box sx={{display:{xs:'none',lg:'flex',xl:'none'},justifyContent:'space-between',width:'100%'}}>
                <LgCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',xl:'flex',xl2:'none'},justifyContent:'space-between',width:'100%'}}>
                <XlCards focusCards={focusCards}/>
            </Box>

            <Box sx={{display:{xs:'none',xl2:'flex'},justifyContent:'space-between',width:'100%'}}>
                <Xl2Cards focusCards={focusCards}/>
            </Box>
            
        </Box>

        {/* Second card section */}
        <Box sx={{pl:2,py:2,mx:{sm2:5}}}>
        <Box sx={{display:'flex',justifyContent:'space-between',color:'white',alignItems:'center',px:2,pb:2}}>
                <Typography fontSize={20} fontWeight={600} sx={{'&:hover':{
                    cursor:'pointer',
                    textDecoration:'underline'
                }}}>Spotify Playlists</Typography>
                <Typography sx={{mr:{xs:4,sm:1},fontSize:{xs:11,sm:14},color:'#a7a7a7',fontWeight:{sm:500},letterSpacing:1,'&:hover':{
                    cursor:'pointer',
                    textDecoration:'underline'
                }}}>SHOW ALL</Typography>
            </Box>
            {/* CARD SECTION */}
            <Box sx={{display:{xs:'flex',sm:'none'},gap:1,width:'100%',justifyContent:'space-around'}}>
                <XsCards focusCards={spotifyPlaylists}/>
            </Box>

            <Box sx={{display:{xs:'none',sm:'flex',md:'none'},justifyContent:'space-between'}}>
                <SmCards focusCards={spotifyPlaylists}/>
            </Box>

            <Box sx={{display:{xs:'none',md:'flex',md2:'none'},justifyContent:'space-between',width:'100%'}}>
                <MdCards focusCards={spotifyPlaylists}/>
            </Box>

            <Box sx={{display:{xs:'none',md2:'flex',xl:'none'},justifyContent:'space-between',width:'100%'}}>
                <Md2Cards focusCards={spotifyPlaylists}/>
            </Box>


            <Box sx={{display:{xs:'none',lg:'flex',xl:'none'},justifyContent:'space-between',width:'100%'}}>
                <LgCards focusCards={spotifyPlaylists}/>
            </Box>

            <Box sx={{display:{xs:'none',xl:'flex',xl2:'none'},justifyContent:'space-between',width:'100%'}}>
                <XlCards focusCards={spotifyPlaylists}/>
            </Box>

            <Box sx={{display:{xs:'none',xl2:'flex'},justifyContent:'space-between',width:'100%'}}>
                <Xl2Cards focusCards={spotifyPlaylists}/>
            </Box>
            
        </Box>
        <Box sx={{pl:2,py:2,mt:8}}>
            <MainFooter />
        </Box>
        
    </Box>
  )
}

export default Main