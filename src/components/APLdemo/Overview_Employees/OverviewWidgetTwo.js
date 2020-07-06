/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext } from 'react';
import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js';
import {Grid, Button} from '@material-ui/core';
import {} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LocationContext } from '../../../contexts/LocationContext';
import styles from './OverviewWidgetTwoStyles';

import EmployeesTable from './EmployeesTable';

function OverviewWidgetTwo(props) {
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
          setState({ [event.currentTarget.name]: 'off'});
          // setState({ ...state, [event.currentTarget.name]: 'off'});
        }else{
          setState({ [event.currentTarget.name]: 'on'});
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
        <Grid item xs={12} >
        <Button
            name="all"
            variant='contained'
            color={state.all === 'on' ?  'primary':'secondary'}
            onClick=  {handleChange}
            value={state.all}
            style={{fontSize:'1.5rem',margin:'1vh'}}
            >
            All
        </Button>
        <Button
            name="noncompliant"
            variant='contained'
            color={state.noncompliant === 'on' ?  'primary':'secondary'}
            onClick= {handleChange}
            value={state.noncompliant}
            style={{fontSize:'1.5rem',margin:'1vh'}}
            >
            Non-Compliant
        </Button>

        </Grid>
        <Grid item xs={12} >
        <Button
            name="lowbattery"
            variant='contained'
            color={state.lowbattery === 'on' ?  'primary':'secondary'}
            onClick= {handleChange}
            value={state.lowbattery}
            style={{fontSize:'1.5rem',margin:'1vh'}}
            >
            Low Battery
        </Button>
        {/* <Button
            name="atrisk"
            variant='contained'
            color={state.atrisk === 'on' ?  'primary':'secondary'}
            onClick= {handleChange}
            value={state.atrisk}
            style={{fontSize:'1.5rem',margin:'1vh'}}
            >
            At-Risk
        </Button> */}
        <Button
            name="quarantine"
            variant='contained'
            color={state.quarantine === 'on' ?  'primary':'secondary'}
            onClick= {handleChange}
            value={state.quarantine}
            style={{fontSize:'1.5rem',margin:'1vh'}}
            >
            Quarantine
        </Button>
        </Grid>
        <Grid item xs={12 }>
          <EmployeesTable rows={[[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default connect(null,{TablePaginationActions})(withTheme(theme)(withStyles(styles)(OverviewWidgetTwo)))