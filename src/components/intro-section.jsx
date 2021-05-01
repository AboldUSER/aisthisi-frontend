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
  text: {
    color:'#1D2E4E',  
    fontFamily:'Titillium Web'
  }
}));

const IntroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper elevation={3}>
        <Typography className={classes.text} variant="h6" style={{ fontSize:30, padding:'10px 25px 0', textAlign:'left'}} >
            The Idea
          </Typography>
          <div >
            <List >
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <ArrowRightRoundedIcon style={{ color:'#1D2E4E' }}/>
                  </ListItemIcon>
                  <ListItemText className={classes.text}
                    primary={<Typography type="body2" style={{ fontSize:20, color:'#1D2E4E', fontFamily:'Titillium Web' }}>Aisthisi is an experiment to create a physical and digital experience by combining the creativity of art, the immutability of blockchain, and the delicacy of organic Greek olive oil</Typography>}
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <ArrowRightRoundedIcon style={{ color:'#1D2E4E' }} />
                  </ListItemIcon>
                  <ListItemText disableTypography
                    primary={<Typography type="body2" style={{ fontSize:20, color:'#1D2E4E', fontFamily:'Titillium Web' }}>Each bottle will have its own unique printed art design, a digital version of the design, a video of the harvest & bottling experience, and contain certified organic extra-virgin olive oil</Typography>}
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <ArrowRightRoundedIcon style={{ color:'#1D2E4E' }} />
                  </ListItemIcon>
                  <ListItemText className={classes.text}
                    primary={<Typography type="body2" style={{ fontSize:20, color:'#1D2E4E', fontFamily:'Titillium Web' }}>Only ten bottles will exist, each designed by a different artist, available via auction</Typography>}
                  />
                </ListItem>
            </List>
          </div>
      </Paper>
      </Container>
  )}

export default IntroSection