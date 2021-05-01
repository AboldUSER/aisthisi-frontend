  
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Art from '../images/stock-art.jpeg';
import Crypto from '../images/stock-crypto.jpeg';
import Olive from '../images/stock-olive.jpeg';
import SimpleCard from './card';


const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(10, 5, 10),
      color: '#131C46',
    },
  }));

const AboutSection = () => {
    const classes = useStyles();
    
    return (
      <Grid container className={classes.root} style={{margin:'auto', maxWidth:1300}}>
      {/* <Grid container  style={{margin:'auto', backgroundColor:'white'}}> */}
      <Grid item xs align="center" style={{margin:'20px'}}>
<SimpleCard m={50} style={{margin:'500px'}}
  imageText={'Art'}
  imageUrl={Art}
  title={'ART'}
  text1={'10 artists from around the world are designing pieces that will be the physical label for the bottle and an accompanying digital asset'}
  text2={'Each bottle is unique'}
/>
</Grid>
<Grid item xs align="center" style={{margin:'20px'}}>
<SimpleCard
  imageText={'Crypto'}
  imageUrl={Crypto}
  title={'BLOCKCHAIN'}
  text1={'Each bottle is represented on the Ethereum blockchain by an NFT that allows the owner to claim delivery & ownership of the bottle, access the digital art, and access a personalized video capturing the experience of a traditional harvest'}
  text2={''}
/>
</Grid>
<Grid item xs align="center" style={{margin:'20px'}}>
<SimpleCard
  imageText={'Olive Oil'}
  imageUrl={Olive}
  title={'OLIVE OIL'}
  text1={'Harvested from an orchard containing 300 year old olive trees in the region of Messinia, Greece'}
  text2={'Certified organic extra-virgin crafted by traditional cold-press technique'}
/>
</Grid>
      {/* </Grid> */}
      </Grid>
    )
}

export default AboutSection;