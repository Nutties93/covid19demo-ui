/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext } from 'react';
import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js';
import {Typography,Grid,Card,CardActionArea,CardContent,Paper,Button,TextField,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core/';
import {searchEmployee} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { VisitorContext } from '../../../contexts/VisitorContext';
import styles from './PersonWidgetThreeStyles';

import { Chart,Bar,Line } from 'react-chartjs-2';
import Hammer from 'hammerjs';
import * as zoom from 'chartjs-plugin-zoom';


function PersonWidgetThree(props) {
      const { classes } = props;
      const {isDarkMode} = useContext(ThemeContext);
      const {visitor, handleSubmit,resetVisitorForm,handleChange  } = useContext(VisitorContext)

      const [refresh, setRefresh] = useState(15000);

      const [trackerids, setTrackerids] = useState({
        trackerid: ""
      });
    
      function handleChangeTracker(event) {
        setTrackerids(oldvalues => ({
          ...oldvalues,
          [event.target.name]: event.target.value
        }));
      }

      function submitChangeTracker(event) {
        setTrackerids({trackerid: ""})
      }

  return (
    <Fragment>
      {/* <Card style={{backgroundColor:'#e9e9e9',height:'67vh'}}> */}
      <Card style={{height:'67vh'}}>
        <CardContent>
          <div style={{height:'5vh'}}> </div>
          <Grid container  alignItems='center'
          justify='center'
          >    
            <Grid item xs={12} md={2}></Grid> 
            <Grid item xs={12} md={8}>
              <Grid container direction="row" justify="center" alignItems="center"  >
                        <form noValidate autoComplete="off">
                          <TextField id="visitorName" name="visitorName" label="Visitor Name" variant="outlined" InputProps={{className: classes.input}} 
                          // inputProps={{className: classes.input}}  InputLabelProps={{className: classes.inputLabel}} 
                          onChange={handleChange}
                          className={classes.textField} value={visitor.visitorName}/>

                          <TextField id="temperature" name="temperature" label="Temperature" variant="outlined" InputProps={{className: classes.input}} 
                          // inputProps={{className: classes.input}}  InputLabelProps={{className: classes.inputLabel}}
                          onChange={handleChange}
                          className={classes.textField} value={visitor.temperature}/>

                          {/* <TextField id="trackerId" name="trackerId"  label="Tracker Id" variant="outlined" InputProps={{className: classes.input}} 
                          // inputProps={{className: classes.input}}  InputLabelProps={{className: classes.inputLabel}}
                          onChange={handleChange}
                          className={classes.textField} value={visitor.trackerId}/> */}
                          <TextField
                            select
                            variant="outlined"
                            id="trackerId" name="trackerId"  label="Tracker Id" variant="outlined" 
                            value={trackerids.trackerid}
                            onChange={handleChangeTracker}
                            inputProps={{ name: "trackerid", id: "outlined-age-simple" }}
                            InputProps={{className: classes.input}} 
                            className={classes.textField}
                          >
                            <MenuItem className={classes.menuItemDisplay}  value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem className={classes.menuItemDisplay} value={1000001}>1000001</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000002}>1000002</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000003}>1000003</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000004}>1000004</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000005}>1000005</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000006}>1000006</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000007}>1000007</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000008}>1000008</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000009}>1000009</MenuItem>
                            <MenuItem className={classes.menuItemDisplay}  value={1000010}>1000010</MenuItem>
                          </TextField>

                          <TextField id="host" name="host" label="Host" variant="outlined" InputProps={{className: classes.input}} 
                          // inputProps={{className: classes.input}}  InputLabelProps={{className: classes.inputLabel}}
                          onChange={handleChange}
                          className={classes.textField} value={visitor.host}/>
                        </form>
              </Grid> 
              <Button
                  fullWidth
                  name="lowbattery"
                  variant='contained'
                  color={'primary'}
                  // value={state.lowbattery}
                  style={{fontSize:'1.3rem',margin:'1vh',marginTop:'4vh'}}
                  onClick={() => {handleSubmit(); submitChangeTracker(); }}
                  >
                  Submit
              </Button>
            </Grid>
            <Grid item xs={12} md={2}></Grid>        
          </Grid>

        </CardContent>
      </Card>  
    </Fragment>
  );
}

export default connect(null,{})(withTheme(theme)(withStyles(styles)(PersonWidgetThree)))