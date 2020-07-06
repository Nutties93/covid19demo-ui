/* Orange Copyright restricted MVP */
import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './WidgetPanelStyles';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

function WidgetPanel(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { classes} = props;

  return (
      <Paper 
      className={isDarkMode ? classes.paperDark : classes.paperLight } 
      elevation={2}>
      <Typography className={classes.header} style={{textAlign: 'center'}} variant='h3' gutterBottom>
          {props.title}
      </Typography>
      {props.children}
      </Paper>
  );
}

WidgetPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(WidgetPanel);

