import React from 'react';
import Box from '@material-ui/core/Box';
import OverviewSection from '../components/overview-section';
import IntroSection from '../components/intro-section';
import AboutSection from '../components/about-section';

const HomePage = () => (
    <Box>
    <OverviewSection />
    <IntroSection />
    <AboutSection />
    </Box>
);

export default HomePage;