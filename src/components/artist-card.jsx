import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: 275,
    minHeight: '325px',
    padding: theme.spacing(3, 0, 0),
  },
  textName: {
    color: '#1D2E4E',
    fontFamily: 'Titillium Web',
    fontWeight: 'bold',
    padding: theme.spacing(2, 0, 0),
    fontSize: theme.typography.pxToRem(20),
  },
  text: {
    color: '#1D2E4E',
    fontFamily: 'Titillium Web',
    padding: theme.spacing(2, 0, 2),
  },
  avatar: {

    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

const ArtistCard = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Avatar className={classes.avatar} alt={props.artistName} src={props.artistImage} />
      <Typography className={classes.textName}>{props.artistName}</Typography>
      <Typography className={classes.text}>{props.artistCity}</Typography>
      <Link className={classes.text} href={props.artistURL} target="_blank" color="inherit">More Info</Link>
    </Paper>
  )
}

export default ArtistCard;