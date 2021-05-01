import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    minWidth: 330,
    minHeight: 375,
    height: "100%",
    display: 'block'
  },
  cardTitle: {
    color:'#1D2E4E', 
    fontWeight:'bold', 
    fontFamily:'Titillium Web'
  },
  cardText: {
    fontWeight:'bold', 
    fontFamily:'Titillium Web'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  let cardContent = props.text1; 
  if (props.text2.length >=1) {
    cardContent = props.text1 + '\n' + '\n' + props.text2 
  }

  const newCardContent = cardContent.split('\n').map(str => <p>{str}</p>);

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={props.imageText}
          height="200"
          image={props.imageUrl}
          title={props.imageText}
        />
        <CardContent minHeight='375' >
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
            {newCardContent}
          </Typography>
        </CardContent>
    </Card>
  );
}
