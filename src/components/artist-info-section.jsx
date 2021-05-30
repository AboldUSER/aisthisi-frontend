import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import AG3030 from '../images/artists/AG3030.jpg';
import Ania from '../images/artists/Ania.jpg';
import MajorArt from '../images/artists/MajorArt.jpg';
import Stephan from '../images/artists/Stephan.jpg';
import Will from '../images/artists/Will.jpg';
import Metadr0n13 from '../images/artists/metadr0n13.png';
import ArtistCard from './artist-card';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(0, 5, 0),
    color: '#131C46',
  },
  artistTitle: {
    color: '#131C46',
      fontSize: 50,
      fontWeight: 'bold',
      padding: theme.spacing(20, 1, 5),
      "@media (max-width: 400px)": {
          fontSize: 40
        }
  }
}));

const ArtistInfoSection = () => {
  const classes = useStyles();

  return (
    <div>
    <Typography className={classes.artistTitle}>Collaborating artists</Typography>
    <Grid container
      spacing={0}
      alignItems="center"
      justify="center"
      className={classes.root} style={{ margin: 'auto', maxWidth: 1300 }}>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='FrancisD.'
          artistCity='Phoenix'
          artistImage={AG3030}
          artistURL='https://linktr.ee/francisdayton'
        />
      </Grid>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='4ni4 Shestakova'
          artistCity='Moscow'
          artistImage={Ania}
          artistURL='https://linktr.ee/4ni4'
        />
      </Grid>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='Major Art'
          artistCity='Estonia'
          artistImage={MajorArt}
          artistURL='https://linktr.ee/majorart'
        />
      </Grid>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='Stephan Weixler'
          artistCity='Graz'
          artistImage={Stephan}
          artistURL='https://www.stephanweixler.com/'
        />
      </Grid>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='Will Benedict'
          artistCity='Paris'
          artistImage={Will}
          artistURL='https://www.instagram.com/rainingbodies'
        />
      </Grid>
      <Grid item xs align="center" style={{ margin: '20px' }}>
      <ArtistCard m={50} 
          artistName='metadr0n13'
          artistCity='Earth'
          artistImage={Metadr0n13}
          artistURL='https://www.instagram.com/metadr0n13'
        />
      </Grid>
    </Grid>
    </div>
  )
}

export default ArtistInfoSection;