/* Orange Copyright restricted MVP */

import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Divider,Paper,BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styles from './APLdemoTwoStyles';
import WidgetPanel from '../Layout/WidgetContext/WidgetPanel';
import theme from '../../MainTheme.js'
//IMPORT WIDGETS!!!!
import PersonWidgetOne from '../APLdemoTwo/Person_Cards/PersonWidgetOne';
import PersonWidgetTwo from '../APLdemoTwo/Person_Visitors/PersonWidgetTwo';
import PersonWidgetThree from '../APLdemoTwo/Person_Register/PersonWidgetThree';

import { VisitorProvider } from '../../contexts/VisitorContext';


function APLdemoTwo(props) {
  const { classes } = props;
  const [view, setView] = useState(0);


  return (
    <VisitorProvider>
      <div className={classes.root}  >
      <Grid container spacing={0} /*style={{backgroundColor: '#D9D9D9'}}*/>
          <Grid item xs={12} lg={3}>        
              <WidgetPanel title='Visitors'>
                  <PersonWidgetTwo/>
              </WidgetPanel>
          </Grid>
          <Grid item xs={12} lg={9} >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <PersonWidgetOne/>
              </Grid>

              <Grid item xs={12}> 
                <WidgetPanel title='Visitor Registration'>
                    <PersonWidgetThree/>
                </WidgetPanel>            
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>
      </div>
    </VisitorProvider>
  );
}

APLdemoTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default  withStyles(styles)(APLdemoTwo);
