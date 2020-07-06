/* Orange Copyright restricted MVP */

import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Divider,Paper,BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styles from './APLdemoStyles';
import WidgetPanel from '../Layout/WidgetContext/WidgetPanel';
import theme from '../../MainTheme.js'
//IMPORT WIDGETS!!!!
import OverviewWidgetOne from '../APLdemo/Overview_Cards/OverviewWidgetOne';
import OverviewWidgetTwo from '../APLdemo/Overview_Employees/OverviewWidgetTwo';
import OverviewWidgetThree from '../APLdemo/Overview_EmployeesQuery/OverviewWidgetThree';
import OverviewWidgetFour from '../APLdemo/Overview_FloorMap/SiteGrid';

function CSSGrid(props) {
  const { classes } = props;
  const [view, setView] = useState(0);

  function chooseView(){
    switch(view){
      case 0:
        return (
          <OverviewWidgetFour/>
        );
      case 1:
        return (
          <OverviewWidgetThree/>
        );
      case 2:
        return (
          <h1>Assets</h1>
        );
      case 3:
        return (
          <h1> NOTIFICATIONS </h1>
        );
    }
  }

  return (
    <div className={classes.root}  >
    <Grid container spacing={0} /*style={{backgroundColor: '#D9D9D9'}}*/>
        <Grid item xs={12} lg={3}>        
            <WidgetPanel title='Employees'>
                <OverviewWidgetTwo/>
            </WidgetPanel>
        </Grid>
        <Grid item xs={12} lg={9} >
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <OverviewWidgetOne/>
            </Grid>
            
            <Grid item xs={12} >
              <Grid container spacing={0} /*style={{backgroundColor: '#D9D9D9'}}*/>
                  <Grid item xs={0} lg={2}>  </Grid>
                  <Grid item xs={12} lg={8}>     
                  <BottomNavigation
                    value={view}
                    onChange={(event, newValue) => {
                      setView(newValue);
                    }}
                    showLabels
                    style={{backgroundColor: theme.palette.common.lightgrey}}
                  >
                    <BottomNavigationAction  label="FloorMap" icon={<FiberManualRecordIcon />}/>
                    <BottomNavigationAction  label="People" icon={<FiberManualRecordIcon />} />
                    <BottomNavigationAction  label="Assets" icon={<FiberManualRecordIcon />} />
                    <BottomNavigationAction  label="Notifications" icon={<FiberManualRecordIcon />} />
                  </BottomNavigation>
                  </Grid>
                  <Grid item xs={0} lg={2}>  </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>              
              {chooseView()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider}/>
    </div>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default  withStyles(styles)(CSSGrid);
