import React, {useRef} from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import CountDown from '../hooks/countdown'
import CountdownTimer from '../hooks/countdown-timer'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      color: '#1D2E4E', 
      padding: theme.spacing(0, 0, 18),
    },
    NFTTitle: {
        fontSize: 40, 
        fontWeight:'bold',
        padding: theme.spacing(0, 2, 2),
        fontFamily:'Titillium Web',
    }
}));

const CollectionSection = () => {
    const classes = useStyles();
    const myRef = useRef(null);
    return (
        <Box className={classes.root} my={5} id='collection' ref={myRef}>
          <Typography className={classes.NFTTitle}>NFT collection dropping this summer</Typography>
          <CountdownTimer />
        </Box>
    );
    }

export default CollectionSection;