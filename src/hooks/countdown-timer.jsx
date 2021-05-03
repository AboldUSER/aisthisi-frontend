import React from "react";
import Countdown from "react-countdown";
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';

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

      <Container sm>
        <Grid container spacing={4}
          justify="center"
        >
          <Grid item>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 40, color: '#1D2E4E', fontWeight: 'bold' }}>{days}</Typography>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 20, color: '#1D2E4E', fontWeight: 'bold' }}>Days</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 40, color: '#1D2E4E', fontWeight: 'bold' }}>{hours}</Typography>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 20, color: '#1D2E4E', fontWeight: 'bold' }}>Hours</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 40, color: '#1D2E4E', fontWeight: 'bold' }}>{minutes}</Typography>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 20, color: '#1D2E4E', fontWeight: 'bold' }}>Minutes</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 40, color: '#1D2E4E', fontWeight: 'bold' }}>{seconds}</Typography>
            <Typography style={{ fontFamily: 'Titillium Web', fontSize: 20, color: '#1D2E4E', fontWeight: 'bold' }}>Seconds</Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

let CorrectDate = new Date(2021, 6, 1).getTime();
let Now = new Date().getTime();
let DropDate = CorrectDate - Now;

const CountdownTimer = () => {


  return (
    <Countdown date={Date.now() + DropDate} renderer={renderer} />
  )
}

export default CountdownTimer;
