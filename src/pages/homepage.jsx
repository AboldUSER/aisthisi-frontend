import React from 'react';
import Box from '@material-ui/core/Box';
import OverviewSection from '../components/overview-section';
import IntroSection from '../components/intro-section';
import AboutSection from '../components/about-section';
import CollectionSection from '../components/collection-section'

const HomePage = () => (
    <Box>
    <OverviewSection />
    <IntroSection />
    <AboutSection />
    <CollectionSection />
    </Box>
);

export default HomePage;