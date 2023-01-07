import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Main() {
  return (
    <Box>

        {/* First card section */}
        <Box sx={{pl:2,py:2}}>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography>Focus</Typography>
                <Typography>SHOW ALL</Typography>
            </Box>
            {/* CARD SECTION */}
            <Box>
                <Card sx={{height:200,width:150,p:2}}>
                    <CardMedia sx={{height:100}}
                    component='img'
                    
                    src='#' />
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