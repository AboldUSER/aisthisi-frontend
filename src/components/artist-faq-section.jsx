import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FAQAccordian from './faq-accordian'
import Fade from '@material-ui/core/Fade';
import data from '../data/artist-faq.json'

const artistFaqArray = data.ArtistFaqArray;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        padding: theme.spacing(0, 5, 0),
        color: '#1D2E4E',
        fontFamily: 'Titillium Web'
    },
    artistFaqTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: theme.spacing(0, 0, 5),
    }
}));

const ArtistFaqSection = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Fade in={true} timeout={1000}>
                <Box my={20}>
                    <Typography className={classes.artistFaqTitle}>FAQ for artists interested in collaborating</Typography>
                    {artistFaqArray.map((qanda) => (FAQAccordian(qanda)))}
                </Box>
            </Fade>
        </Container>
    );
}

export default ArtistFaqSection;