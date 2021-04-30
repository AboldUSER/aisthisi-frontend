import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
  },
}));

const IntroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper elevation={3}>
        <Typography variant="h6" >
            The Idea
          </Typography>
          <div >
            <List >
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Aisthisi is an experiment to create a physical and digital experience by combining the creativity of art, the immutability of blockchain, and the delicacy of organic Greek olive oil"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Each bottle will have its own unique printed art design, a digital version of the design, a video of the harvest & bottling experience, and contain certified organic extra-virgin olive oil"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Only ten bottles will exist, each designed by a different artist, available via auction"
                  />
                </ListItem>
            </List>
          </div>
      </Paper>
      </Container>
  )}

export default IntroSection