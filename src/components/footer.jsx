import React from 'react';
import { Grid, makeStyles, IconButton, Container } from '@material-ui/core';
import TwitterIcon from '../images/contact-icons/twitter-icon';
import DiscordIcon from '../images/contact-icons/discord-icon';
import InstagramIcon from '../images/contact-icons/instagram-icon';
import MediumIcon from '../images/contact-icons/medium-icon';

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
          <Grid item md style={{ margin: "auto" }}>
            <IconButton aria-label="twitter" target='_blank' href="https://twitter.com/aisthisi_nft">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item md style={{ margin: "auto" }}>
            <IconButton aria-label="discord" target='_blank' href="https://discord.gg/HNhDTMTAN7">
              <DiscordIcon />
            </IconButton>
          </Grid>
          <Grid item md style={{ margin: "auto" }}>
            <IconButton aria-label="instagram" target='_blank' href="https://www.instagram.com/aisthisi_nft">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item md style={{ margin: "auto" }}>
            <IconButton aria-label="medium" target='_blank' href="https://medium.com/aisthisi">
              <MediumIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <p className={classes.copyright}>Aisthisi Copyright ⓒ {year}</p>
    </div>

  )
}

export default Footer;