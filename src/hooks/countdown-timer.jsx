import React from "react";
import Countdown from "react-countdown";
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, IconButton, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '70%',
      padding: theme.spacing(10, 5, 0),
      color:'#1D2E4E',  
      fontFamily:'Titillium Web'
    },
    text: {
      
    }
  }));

// Random component
const Completionist = () => <span>NFT have dropped!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      
      <Grid container spacing={5} 
      // direction="column"
        alignItems="center"
        justify="center">
        <Grid item>
        <Typography style={{fontFamily:'Titillium Web', fontSize:40, color:'#1D2E4E', fontWeight:'bold'}}>{days}</Typography>
        <Typography style={{fontFamily:'Titillium Web', fontSize:20, color:'#1D2E4E', fontWeight:'bold'}}>Days</Typography>
        </Grid>
        <Grid item>
        <Typography style={{fontFamily:'Titillium Web', fontSize:40, color:'#1D2E4E', fontWeight:'bold'}}>{hours}</Typography>
        <Typography style={{fontFamily:'Titillium Web', fontSize:20, color:'#1D2E4E', fontWeight:'bold'}}>Hours</Typography>
        </Grid>
        <Grid item>
        <Typography style={{fontFamily:'Titillium Web', fontSize:40, color:'#1D2E4E', fontWeight:'bold'}}>{minutes}</Typography>
        <Typography style={{fontFamily:'Titillium Web', fontSize:20, color:'#1D2E4E', fontWeight:'bold'}}>Minutes</Typography>
        </Grid>
        <Grid item>
        <Typography style={{fontFamily:'Titillium Web', fontSize:40, color:'#1D2E4E', fontWeight:'bold'}}>{seconds}</Typography>
        <Typography style={{fontFamily:'Titillium Web', fontSize:20, color:'#1D2E4E', fontWeight:'bold'}}>Seconds</Typography>
        </Grid>
      </Grid>
    );
  }
};

let CorrectDate = new Date(2021, 6, 1).getTime();
let Now = new Date().getTime();
let DropDate = CorrectDate - Now;

const CountdownTimer = () => {

  const classes = useStyles();

  return(
  <Countdown className={classes.root} date={Date.now() + DropDate} renderer={renderer} />
  )
}

export default CountdownTimer;
