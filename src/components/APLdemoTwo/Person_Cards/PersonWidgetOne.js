/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext} from 'react';
import {Typography,Grid,Card,CardActionArea,CardContent,Paper} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './PersonWidgetOneStyles';
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
        // props.getSiteSummaryData({siteid}).then( function (response) {
        //     console.log(siteid)
        //     if(response.data.respcode===1200){
        //         console.log(response.data);
        //         setEmployees(response.data.employeesprotected)
        //         setCompliant(response.data.socialdistancingcompliance)
        //         setNoncompliant(response.data.socialdistancingnoncompliance)
        //         setQurantine(response.data.quarantine)
        //     }
        //     }).catch(function (error) {
        //     console.log(error);
        //     setEmployees({});
        //     setCompliant({});
        //     setNoncompliant({});
        //     setQurantine({});
        //     });   
    }, [siteid]); 

    function onRefresh(){         

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
                                Available Tracker 
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'12vh'}}>
                            <Grid item xs={12}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', marginTop:'2vh', 
                                color:theme.palette.common.black, height:'8vh'}} >
                                   <b> 21 </b> 
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
                               Visitors in office
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'12vh'}}>
                            {/* <Grid item xs={7} style={{height:'100%'}} >
                                <SparkLine alldetails={compliant.complianceTrend} chartColors={'rgba(75, 192, 192,0.8)'}/>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:theme.palette.common.green}} >
                                     <b> 11 </b> 
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
                                Pending assigned trackers
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0}
                            style={{height:'12vh'}}>
                            {/* <Grid item xs={7}>
                                <SparkLine alldetails={noncompliant.nonComplianceTrend} chartColors={'rgba(255, 159, 64,0.8)'}/>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:theme.palette.common.orange}} >
                                     <b> 10 </b> 
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
                               Total Visitor(s) of the Day
                            </Typography>

                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'12vh'}}>
                            {/* <Grid item xs={7}>
                                <SparkLine alldetails={qurantine.qurantineTrend} chartColors={'rgba(255, 39, 30)'}/>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'black'}} >
                                     <b> 15 </b> 
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