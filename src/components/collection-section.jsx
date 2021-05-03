import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CountdownTimer from '../hooks/countdown-timer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#1D2E4E',
    padding: theme.spacing(0, 0, 18),
    "@media (max-width: 420px)": {
      scrollMargin: "65px"
    }
  },
  NFTTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: theme.spacing(0, 2, 2),
    fontFamily: 'Titillium Web',
  }
}));

const CollectionSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id='collection' my={5} >
      <Typography className={classes.NFTTitle}>NFT collection dropping this summer</Typography>
      <CountdownTimer />
    </Box>
  );
}

export default CollectionSection;