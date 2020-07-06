/* Orange Copyright restricted MVP */

import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    clock: {
        fontSize: '1.4rem',
        margin: theme.spacing.unit* 0.2, // You might not need this now
        position: 'absolute',
        bottom: 0,
        right: theme.spacing.unit * 1
      },
});
function Clock(props) {
  const [date, setDate] = useState(new Date());
  const { classes } = props;
  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
      return function(){
        clearInterval(timerID);
        };     
  });  
   function tick() {
    setDate(new Date());
   } 
  return (
      <Typography className={classes.clock}>
        {date.toLocaleString()} 
      </Typography>
  );
}
export default withStyles(styles)(Clock)