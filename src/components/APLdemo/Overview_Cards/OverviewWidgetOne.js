/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext} from 'react';
import {Typography,Grid,Card,CardActionArea,CardContent,Paper} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './OverviewWidgetOneStyles';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js'
import { LocationContext } from '../../../contexts/LocationContext';
import {getSiteSummaryData} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import SparkLine from './SparkLine';

function OverviewWidgetOne(props){

    const { classes } = props;
    // const  isDarkMode  = useContext(ThemeContext);
    const { siteid } = useContext(LocationContext);
    const [refresh, setRefresh] = useState(15000);
    const [loading,setLoading] = useState(false);

    const [employees,setEmployees]=useState({});
    const [compliant,setCompliant]=useState({});
    const [noncompliant,setNoncompliant]=useState({});
    const [qurantine,setQurantine]=useState({});


    useEffect(() => {        
        props.getSiteSummaryData({siteid}).then( function (response) {
            console.log(siteid)
            if(response.data.respcode===1200){
                console.log(response.data);
                setEmployees(response.data.employeesprotected)
                setCompliant(response.data.socialdistancingcompliance)
                setNoncompliant(response.data.socialdistancingnoncompliance)
                setQurantine(response.data.quarantine)
            }
            }).catch(function (error) {
            console.log(error);
            setEmployees({});
            setCompliant({});
            setNoncompliant({});
            setQurantine({});
            });   
    }, [siteid]); 

    function onRefresh(){         
        props.getSiteSummaryData({siteid}).then( function (response) {
            if(response.data.respcode===1200){
                console.log(response.data);
                setEmployees(response.data.employeesprotected)
                setCompliant(response.data.socialdistancingcompliance)
                setNoncompliant(response.data.socialdistancingnoncompliance)
                setQurantine(response.data.quarantine)
            }
            }).catch(function (error) {
            console.log(error);
            setEmployees({});
            setCompliant({});
            setNoncompliant({});
            setQurantine({});
            });   
    }

    useEffect(() => {        
        if (refresh > 0 ){
            var timerID = setInterval( () => onRefresh(), refresh);
              return function(){
                clearInterval(timerID);
              }; 
        }
    })

    return (        
            <div>
            <Grid container   
                alignItems='center'
                justify='center' 
                spacing={16}   
                style={{height:'100%',padding:'5px'}}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                            <CardContent>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            >
                                Employees 
                            </Typography>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            gutterBottom >
                                Protected
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'10vh'}}>
                            <Grid item xs={12}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', marginTop:'2vh', color:theme.palette.common.blue, height:'8vh'}} >
                                   <b>{employees.detectedEmployees}/ {employees.totalEmployees}</b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                            <CardContent>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            >
                                Social Distancing 
                            </Typography>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            gutterBottom >
                                Compliance
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'10vh'}}>
                            <Grid item xs={6} style={{height:'100%'}} >
                                <SparkLine alldetails={compliant.complianceTrend} chartColors={'rgba(75, 192, 192,0.8)'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h2" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'green'}} >
                                     <b> {compliant.compliantDevicesToday} % </b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                            <CardContent>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            >
                                Social Distancing 
                            </Typography>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            gutterBottom >
                                Non-compliance
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0}
                            style={{height:'10vh'}}>
                            <Grid item xs={6}>
                                <SparkLine alldetails={noncompliant.nonComplianceTrend} chartColors={'rgba(255, 159, 64,0.8)'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h2" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'orange'}} >
                                     <b> {noncompliant.nonCompliantDevicesToday} %</b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                            <CardContent>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            >
                                Quarantine
                            </Typography>
                            <Typography                    
                            variant="h4" component="h2"  
                            style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'600'}}
                            gutterBottom >
                                  &nbsp;
                            </Typography>

                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'10vh'}}>
                            <Grid item xs={7}>
                                <SparkLine alldetails={qurantine.qurantineTrend} chartColors={'rgba(255, 39, 30)'}/>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'red'}} >
                                     <b> {qurantine.qurantineToday} </b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
            </Grid>
            </div>
    );
}


//Import Dependencies here! For higher order components, wrap here!
export default connect(null,{getSiteSummaryData})(withTheme(theme)(withStyles(styles)(OverviewWidgetOne)));