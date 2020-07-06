/* Orange Copyright restricted MVP */

import React,{useState,useEffect}  from 'react';
import history from '../../history';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../MainThemeLight.js';
import {Button,Paper,Typography,Modal,Card,CardContent,Grid }from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './Accountstyles';
import { Cookies } from 'react-cookie';
import {connect} from 'react-redux';
import setAuthToken from '../../actions/setAuthToken';
import {userLogoutRequest} from '../../actions/loginAction';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  Hint
} from 'react-vis';
import Graph1 from './Graph1'
// const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];



function Account(props) {
  const { classes } = props;
  const [greenData,setGreenData] = useState([{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}]);
  const [blueData,setBlueData] = useState([{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}]);

  const [labelData,setLabelData ]=  useState([]);
  const [tooltipvalue,setTooltipvvalue] = useState(null);

  useEffect(()=>{
    setLabelData(greenData.map((d, idx) => ({
      // x: d.x,
      y: Math.max(greenData[idx].y, blueData[idx].y)
    })));
  },[greenData])
  
  function genGraphdata(){
    setGreenData([{x: 'A', y: Math.floor(Math.random() * 150)}, {x: 'B', y: Math.floor(Math.random() * 150)}, {x: 'C', y: Math.floor(Math.random() * 150)}]);
    setBlueData([{x: 'A', y: Math.floor(Math.random() * 100)}, {x: 'B', y: Math.floor(Math.random() * 100)}, {x: 'C', y: Math.floor(Math.random() * 100)}]);
  }

  function rememberValue(evt){
    console.log(evt)
    setTooltipvvalue(null)
  }

  function forgetValue(){
    setTooltipvvalue(null);
  }



  // const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  return (      
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography style={{fontSize:'5rem',marginTop:'2vh',color:"#000"}} gutterBottom>
          Demo Graph
        </Typography>
        {/* <Typography style={{fontSize:'3rem',marginTop:'2vh',color:"#000"}} gutterBottom>
          Tooltip: {tooltipvalue}
        </Typography> */}
        <Grid container  
        spacing = {0} 
        justify='flex-start'> 
          <Grid item xs = {12}  md={6}>
            <div>
              <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="XValue" />
                <YAxis tickLabelAngle={-45}  title="YValue"/>
                <VerticalBarSeries  
                data={greenData}           
                onSeriesMouseOver={(evt)=>{rememberValue(evt)}}
                onSeriesMouseOut={()=>{forgetValue()}}/>

                <VerticalBarSeries 
                data={blueData}           
                onSeriesMouseOver={(evt)=>{rememberValue(evt)}}
                onSeriesMouseOut={()=>{forgetValue()}}/>

                <LabelSeries data={labelData} getLabel={d => d.x} />
                
                {tooltipvalue ? <Hint value={tooltipvalue} /> : null}
              </XYPlot>
            </div>
            <button onClick={()=>{genGraphdata()}}>Change Data!</button>
          </Grid>
          <Grid item xs = {12} md={6}>
            <div>
              <Graph1></Graph1>
            </div>
          </Grid>
        </Grid>
      </Paper>                   
    </main>
  );
}

export default connect(null,{ userLogoutRequest})(withTheme(theme)(withStyles(styles)(Account)));