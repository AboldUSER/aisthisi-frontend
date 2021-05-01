import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';

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

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

const StyledHeader = styled(AppBar)`
  display: flex;
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
  };
`;

const StyledLogoWrapper = styled.div`
        ${'' /* width: 260px; */}
        @media (max-width: 400px) {
          width: auto;
          marginRight: 260px; 
        }
      `;


// let windowWidth = window.innerWidth;

const SetMenu = () => {

const [anchorEl, setAnchorEl] = React.useState(null);

const open = Boolean(anchorEl);

const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
};
    
const handleClose = () => {
      setAnchorEl(null);
};

  if (window.innerWidth > 600) {
    return (
      <Fade in={true} timeout={500}>
      <SiteNav >
            <SiteNavLink exact to='/' style={{ textDecoration:'none'}}>
              <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', margin: '10px', textDecoration:'none' }} variant='subtitle1'>Concept</Typography>
            </SiteNavLink>
            <SiteNavLink exact to='/artists' style={{ textDecoration:'none'}}>
              <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', margin: '10px', textDecoration:'none' }} variant='subtitle1'>Artists</Typography>
            </SiteNavLink>
            <IconButton href='https://twitter.com/aisthisi_nft' target='_blank' style={{ color: '#f8f9fa'}}>
              <TwitterIcon />
            </IconButton>
            </SiteNav>
            </Fade>
    )
  } else {
    return (
      <div>
      <Fade in={true} timeout={500}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: '#f8f9fa'}}
      >
        <MoreVertIcon color='#F8F9FA' backgroundColor='#F8F9FA'/>
      </IconButton>
      </Fade>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} component={NavLink} to="/">
          <Typography style={{ fontFamily: 'Titillium Web', margin: '10px' }} variant='subtitle1'>
            Concept
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} component={NavLink} to="/artists">
          <Typography style={{ fontFamily: 'Titillium Web',  margin: '10px' }} variant='subtitle1'>
            Artists
          </Typography>
        </MenuItem>
      </Menu>
    </div>
    )
  }
}

const Header = (props) => {

  const [dimensions, setDimensions] = React.useState({ 
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })

 return (
      <ElevationScroll {...props}>
      <StyledHeader style={{ background: '#68bdce' }} zIndex="tooltip">
        <Toolbar>
        <Box display='flex' flexGrow={80}>
            
            <Link exact to='/'>
              <StyledLogoWrapper ><Logo/></StyledLogoWrapper>
            </Link>
            <Link style={{ margin: 'auto 0', textDecoration:'none' }} href='/'>
            <Typography style={{ fontFamily: 'Titillium Web', color: '#f8f9fa', fontSize: 30, fontWeight: 'bold' }} variant='subtitle1'>Aisthisi</Typography>
            </Link>
        </Box>
        <SetMenu />
        </Toolbar>
      </StyledHeader>
      </ElevationScroll>
)}

export default Header;