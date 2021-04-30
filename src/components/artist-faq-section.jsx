import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FAQAccordian from './faq-accordian'
import data from '../data/artist-faq.json'

const artistFaqArray = data.ArtistFaqArray;

const ArtistFaqSection = () => (
    <Container>
        <Box my={30}>
           <Typography>Common questions for artists interested in collaborating with Aisthisi</Typography>
            {artistFaqArray.map((qanda) => ( FAQAccordian(qanda)))}
        </Box>
    </Container>
);

export default ArtistFaqSection;