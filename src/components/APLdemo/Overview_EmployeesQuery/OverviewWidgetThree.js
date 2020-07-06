/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext } from 'react';
import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js';
import {Grid} from '@material-ui/core';
import {} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LocationContext } from '../../../contexts/LocationContext';
import styles from './OverviewWidgetThreeStyles';

import EmployeesQueryTable from './EmployeesQueryTable';

function OverviewWidgetThree(props) {
      const { classes } = props;

      const {isDarkMode} = useContext(ThemeContext);
      const { siteid } = useContext(LocationContext);
      const [refresh, setRefresh] = useState(0);

      const [state, setState] = useState({
        all: 'on',
        noncompliant: 'off',
        lowbattery: 'off',
        atrisk: 'off',
        quarantine: 'off',
      });

      function handleChange(event){
        if(event.currentTarget.value === 'on'){
          setState({ ...state, [event.currentTarget.name]: 'off'});
        }else{
          setState({ ...state, [event.currentTarget.name]: 'on'});
        }
      };

      function onRefresh(){

      }

      // useEffect(() => {        
      //   if (refresh > 0 ){
      //     var timerID = setInterval( () => onRefresh(), refresh);
      //       return function(){
      //         clearInterval(timerID);
      //       }; 
      //   }          
      // });

  return (
    <Fragment>
      <Grid container   
      alignItems='center'
      justify='center'
      >                 
        <Grid item xs={12 }>
          <EmployeesQueryTable rows={[[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default connect(null,{TablePaginationActions})(withTheme(theme)(withStyles(styles)(OverviewWidgetThree)))