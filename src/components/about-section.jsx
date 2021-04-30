  
import React from 'react';
import { Grid, makeStyles, Container } from '@material-ui/core';
import Art from '../images/stock-art.jpeg';
import Crypto from '../images/stock-crypto.jpeg';
import Olive from '../images/stock-olive.jpeg';
import SimpleCard from './card';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(10, 5, 10),
      color: '#131C46',
    },

  }));

function AboutSection() {
    const classes = useStyles();
    ;
    return (
        <Container maxWidth="lg">
        <div className={classes.root}>
        {/* <h1 style={{marginBottom: 50}}>Benefits of xLiquidity</h1> */}
      <Grid container spacing={10}>
      <Grid item xs>
<SimpleCard
  imageText={'Art'}
  imageUrl={Art}
  title={'ART'}
  text={'10 artists from around the world are designing pieces that will be the physical label for the bottle and an accompanying digital asset \n Each bottle is unique'}
/>
</Grid>
<Grid item xs>
<SimpleCard
  imageText={'Crypto'}
  imageUrl={Crypto}
  title={'BLOCKCHAIN'}
  text={'Each bottle is represented on the Ethereum blockchain by an NFT that allows the owner to claim delivery & ownership of the bottle, access the digital art, and access a personalized video capturing the experience of a traditional harvest'}
/>
</Grid>
<Grid item xs>
<SimpleCard
  imageText={'Olive Oil'}
  imageUrl={Olive}
  title={'OLIVE OIL'}
  text={'Harvested from an orchard containing 300 year old olive trees in the region of Messinia, Greece \n Certified organic extra-virgin crafted by traditional cold-press technique'}
/>
</Grid>
      </Grid>
      
      </div>
      </Container>
    )
}

export default AboutSection;