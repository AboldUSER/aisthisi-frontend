import React from 'react';
import Image from '../images/olive-orchard.jpeg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { BackgroundImage } from 'react-image-and-background-image-fade';

const useStyles = makeStyles({
  root: {
  },
  overviewBox: {
    position: "absolute",
    left: "5%",
    right: "5%",
    top: "30%",
    "@media (max-width: 450px)": {
      top: "20%",
    },
    "@media (max-width: 360px)": {
      top: "10%",
    }
  },
  backgroundImageStyle: {
    height: '85vh',
    backgroundPosition: "center bottom",
    backgroundSize: 'cover'
  }
});

const scrollToCollection = () => {
  document.getElementById('collection').scrollIntoView({ behavior: "smooth", block:"start" });
}

const OverviewSection = () => {
  const classes = useStyles();

  return (
    <Box my={5}>
      <BackgroundImage src={Image} className={classes.backgroundImageStyle} transitionTime='2s'>
        <Box style={{ position: 'relative', opacity: '0.85', backgroundColor: '#ffffff', height: '85vh' }} />
        <Box className={classes.overviewBox} >
          <Typography style={{ fontSize: 80, color: '#1D2E4E', fontWeight: 'bold', fontFamily: 'Titillium Web' }}>Aisthisi</Typography>
          <Typography style={{ fontSize: 20, color: '#1D2E4E', fontFamily: 'Titillium Web' }}>Art + Blockchain + Olive Oil</Typography>
          <Typography style={{ fontSize: 30, color: '#1D2E4E', fontFamily: 'Titillium Web', padding: '2vh' }}>10 unique proof-of-harvest bottles of organic Greek deliciousness</Typography>
          <Button onClick={scrollToCollection} variant="contained" style={{ cursor: 'pointer', color: '#f8f9fa', backgroundColor: '#4691a0', fontWeight: 'bold', fontFamily: 'Titillium Web' }}>Show Collection</Button>
        </Box>
      </BackgroundImage>
    </Box>
  );
}

export default OverviewSection