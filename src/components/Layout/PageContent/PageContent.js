/* Orange Copyright restricted MVP */
import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './PageContentStyles';
import { ThemeContext } from '../../../contexts/ThemeContext';

function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { classes } = props;

  return (
    <div className={isDarkMode ? classes.bodyLight : classes.bodyDark}>
     {props.children}
    </div>
  );
}
export default withStyles(styles)(PageContent);

