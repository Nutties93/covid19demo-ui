/* Orange Copyright restricted MVP */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme,withStyles,withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js'
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = theme => ({
  // root: {
  //   // justifyContent: 'flex-end',
  //   // width: '100%',
  //   // marginLeft: '10vw',
  //   // marginTop: '4vh',
  //   // height:'8vh',
  //   // alignItems: 'center',
  // },

});

function TablePaginationActions(props) {
  const { classes } = props;
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    // <div className={classes.root}>
    <Fragment>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='First Page'>
        { false ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton         
        onClick={handleBackButtonClick} 
        disabled={page === 0} 
        aria-label='Previous Page'>
        {false  ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton        
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Next Page'>
        {false ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Last Page'>
        {false  ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Fragment>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default withTheme(theme)(withStyles(styles)(TablePaginationActions));