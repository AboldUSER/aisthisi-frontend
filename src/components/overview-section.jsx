import React from 'react';
import Image from '../images/olive-orchard.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { BackgroundImage } from 'react-image-and-background-image-fade'

const OverviewSection = () => (
    <Box my={10}>
      <BackgroundImage src={Image} height='85vh' transitionTime='2s'
      style={{ position:'relative', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover' }}
      >
        <Box style={{position:'relative', opacity: '0.85', backgroundColor: '#ffffff', height: '85vh' }} />
        <Box position="absolute" left="5%" right="5%" top='30%'>
        <Typography style={{fontSize:80, color:'#1D2E4E', fontWeight:'bold', fontFamily:'Titillium Web'}}>Aisthisi</Typography>
        <Typography style={{fontSize:20, color:'#1D2E4E', fontFamily:'Titillium Web' }}>Art + Blockchain + Olive Oil</Typography>
        <Typography style={{fontSize:30, color:'#1D2E4E', fontFamily:'Titillium Web', padding:'2vh' }}>10 unique proof-of-harvest bottles of organic Greek deliciousness</Typography>
        <Button href='#collection' variant="contained" style={{ color:'#f8f9fa', backgroundColor: '#4691a0', fontWeight:'bold', fontFamily:'Titillium Web' }}>Show Collection</Button>
        </Box>
      </BackgroundImage>
    </Box>
);

export default OverviewSection