import React from 'react';
import { Grid, makeStyles, IconButton, Container } from '@material-ui/core';
import TwitterIcon from '../images/contact-icons/twitter-icon';
import DiscordIcon from '../images/contact-icons/discord-icon';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(5, 10, 1),
      backgroundColor: '#7B9B91',
      color: '#fff',
    },
    copyright: {
      padding: theme.spacing(5, 0, 0),
    },
  }));

function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (

        <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md>
<h1>Join our community to stay updated</h1>
<Container maxWidth="sm">
<Grid container >
    <Grid item md style={{margin: "auto"}}>
    <IconButton aria-label="twitter" href="https://twitter.com/aisthisi_nft">
        <TwitterIcon/>
    </IconButton>
    </Grid>
    <Grid item md style={{margin: "auto"}}>
    <IconButton aria-label="discord" href="https://discord.gg/HNhDTMTAN7">
        <DiscordIcon/>
    </IconButton>
    </Grid>
    </Grid>
</Container>
</Grid>
{/* <Grid item md>
        <img src={logo} width="30%" />
        </Grid> */}
      </Grid>
      <p className={classes.copyright}>Aisthisi Copyright ⓒ {year}</p>
      </div>

    )
}

export default Footer;