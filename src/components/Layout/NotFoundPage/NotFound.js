/* Orange Copyright restricted MVP */

import React  from 'react'
import history from '../../../history';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './NotFoundstyles';

function NotFound(props) {
  const { classes } = props;
  function handleSubmit(event){
      event.preventDefault();
      history.push('/');
  }
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
      <Typography style={{fontSize:'8rem'}}>
      404 Not Found
      </Typography>
        <form className={classes.form}>
        <Typography style={{fontSize:'4rem'}}>
        The page you are looking for is no longer available
        </Typography>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick= {handleSubmit}>
            Go Back to HomePage
          </Button>
        </form>
      </Paper>
    </main>
  );
}
export default withStyles(styles)(NotFound);