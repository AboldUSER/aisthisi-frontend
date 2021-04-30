import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(1, 1, 1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    // flexBasis: '33.33%',
    // flexShrink: 0,
  },
}));

export default function FAQAccordian(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="artist-FAQ-content"
          aria-controls="artist-FAQ-content"
          id="artist-FAQ-content"
        >
          <Typography className={classes.heading}>{props.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left">{props.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
