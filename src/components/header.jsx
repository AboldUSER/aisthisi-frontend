import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo';

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const StyledHeader = styled(AppBar)`
  display: flex;
  ${'' /* flex-direction: row; */}
  ${'' /* justify-content: space-between; */}
  ${'' /* align-items: center; */}
  margin-bottom: 64px;
  padding: 5px 16px 0px;
`;

const SiteNav = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  ${'' /* > * {
    margin-right: 32px;
  } */}
`;

const SiteNavLink = styled(Link).attrs({ component: NavLink })`
  text-transform: uppercase;
  &.active {
    h6 {
      font-weight: 600;
    }
  }
`;

const StyledLogoWrapper = styled.div`
        ${'' /* width: 260px; */}
        @media (max-width: 400px) {
          width: auto;
          marginRight: 260px; 
        }
      `;

function Header(props) {
  return (
      <ElevationScroll {...props}>
      <StyledHeader style={{ background: '#68bdce' }} zIndex="tooltip">
      {/* <AppBar> */}
        <Toolbar>
        <Box display='flex' flexGrow={80}>
            
            <Link href='/'>
              <StyledLogoWrapper ><Logo/></StyledLogoWrapper>
            </Link>
            <Link style={{ margin: 'auto 0' }} href='/'>
            <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', fontSize: 30, fontWeight: 'bold' }} variant='subtitle1'>Aisthisi</Typography>
            </Link>
        </Box> 
            <SiteNav >
            <SiteNavLink exact to='/'>
              <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', margin: '10px' }} variant='subtitle1'>Concept</Typography>
            </SiteNavLink>
            <SiteNavLink exact to='/artists'>
              <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', margin: '10px' }} variant='subtitle1'>Artists</Typography>
            </SiteNavLink>
            <IconButton href='https://twitter.com/aisthisi_nft' target='_blank' style={{ color: '#f8f9fa'}}>
              <TwitterIcon />
            </IconButton>
            </SiteNav>
        </Toolbar>
      {/* </AppBar> */}
      </StyledHeader>
      </ElevationScroll>
  );
}

export default Header;