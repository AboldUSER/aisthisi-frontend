import React from 'react';
import { Grid, makeStyles, IconButton, Container } from '@material-ui/core';
import TwitterIcon from '../images/contact-icons/twitter-icon';
import DiscordIcon from '../images/contact-icons/discord-icon';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(5, 10, 1),
      backgroundColor: '#68BDCE',
      color: '#f8f9fa',
      margin: 'auto'
    },
    copyright: {
      padding: theme.spacing(4, 0, 2),
      color: '#f8f9fa'
    },
  }));

function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (

        <div className={classes.root}>
<h1>Join our community to stay updated</h1>
<Container maxWidth="sm">
<Grid container maxWidth="md">
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
      <p className={classes.copyright}>Aisthisi Copyright ⓒ {year}</p>
      </div>

    )
}

export default Footer;