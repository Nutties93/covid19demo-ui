/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext } from 'react';
import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js';
import {Grid, Button} from '@material-ui/core';
import {getEmployeeList} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LocationContext } from '../../../contexts/LocationContext';
import styles from './PersonWidgetTwoStyles';

import VisitorsTable from './VisitorsTable';

function PersonWidgetTwo(props) {
      const { classes } = props;

      const {isDarkMode} = useContext(ThemeContext);
      const { siteid } = useContext(LocationContext);
      const [refresh, setRefresh] = useState(15000);
      const [selectedType,setSelectedType]= useState("all");
      const [employeesDetails, setEmployeesDetails] = useState([{}])


      const [state, setState] = useState({
        all: 'on',
        noncompliant: 'off',
        lowbattery: 'off',
        atrisk: 'off',
        quarantine: 'off',
      });

      useEffect(()=>{
        props.getEmployeeList({siteid,"listtype": selectedType}).then( function (response) {
          if(response.data.respcode===1200){
              console.log(response.data.employees);
              setEmployeesDetails(response.data.employees)
          }
          }).catch(function (error) {
          console.log(error);
          });  
      },[siteid, selectedType])

      function handleChange(event){
        if(event.currentTarget.value === 'on'){
          setState({ [event.currentTarget.name]: 'off'});
          // setState({ ...state, [event.currentTarget.name]: 'off'});
        }else{
          setState({ [event.currentTarget.name]: 'on'});
          setSelectedType(event.currentTarget.name)
        }
      };

      function onRefresh(){
        props.getEmployeeList({siteid,"listtype": selectedType}).then( function (response) {
          if(response.data.respcode===1200){
              console.log(response.data.employees);
              setEmployeesDetails(response.data.employees)
          }
          }).catch(function (error) {
          console.log(error);
          });  
      }

      useEffect(() => {        
        if (refresh > 0 ){
          var timerID = setInterval( () => onRefresh(), refresh);
            return function(){
              clearInterval(timerID);
            }; 
        }          
      });

  return (
    <Fragment>
      <Grid container   
      alignItems='center'
      justify='center'
      >                 

        <Grid item xs={12 }>
          <VisitorsTable rows={employeesDetails}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default connect(null,{TablePaginationActions,getEmployeeList})(withTheme(theme)(withStyles(styles)(PersonWidgetTwo)))