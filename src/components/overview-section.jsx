import React from 'react';
import Image from '../images/olive-orchard.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const OverviewSection = () => (
    <Box my={10}>
      <div style={{ position:'relative',
        backgroundImage: `url(${Image})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover', height: '85vh' }}>
        <Box style={{position:'relative', opacity: '0.5', backgroundColor: '#ffffff', height: '150vh'}} />
        <Box position="absolute" left="5%" right="5%" top='43%'>
        <Typography>Aisthisi</Typography>
        <Typography>Art + Blockchain + Olive Oil</Typography>
        <Typography>10 unique proof-of-harvest bottles of organic Greek deliciousness</Typography>
        <Button variant="contained">Show Collection</Button>
        </Box>
      </div>
    </Box>
);

export default OverviewSection