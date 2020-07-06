/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext} from 'react';
import {Typography,Grid,Card,CardActionArea,CardContent,Paper} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './OverviewWidgetOneStyles';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js'
import { LocationContext } from '../../../contexts/LocationContext';
import {} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import SparkLine from './SparkLine';

function OverviewWidgetOne(props){

    const { classes } = props;
    // const  isDarkMode  = useContext(ThemeContext);
    const { siteid } = useContext(LocationContext);
    const [refresh, setRefresh] = useState(0);
    const [loading,setLoading] = useState(false);
    const [dataAvailable, setDataAvailable] = useState(true);

    useEffect(() => {        
        // props.getGeofenceCount({siteid}).then( function (response) {
        //     setLoading(false);
        //     console.log('Print Geofence, FIRST MOUNT!');
        //     setValue(response.data.count);
        //     setTimestamp(response.data.timestamp);
        //     if(response.data.respcode===1200){
        //         setDataAvailable(true);
        //     }
        //     else{
        //         setValue(response.data.description)
        //         setDataAvailable(false);
        //     }
        //     console.log(response.data.count);
        //     }).catch(function (error) {
        //     console.log(error);
        //     });   
        //     setLoading(true);
    }, [siteid]); 

    function onRefresh(){         
        // props.getGeofenceCount({siteid}).then( function (response){
        // console.log('Print Geofence, UPDATE!');
        // setValue(response.data.count);
        // setTimestamp(response.data.timestamp);
        // console.log(response.data.count);
        // }).catch(function (error) {
        // console.log(error);
        // });   
    }

    // useEffect(() => {        
    //     if (refresh > 0 ){
    //         var timerID = setInterval( () => onRefresh(), refresh);
    //           return function(){
    //             clearInterval(timerID);
    //           }; 
    //     }
    // })

    return (        
            <div>
            <Grid container   
                alignItems='center'
                justify='center' 
                spacing={16}   
                style={{height:'100%',padding:'5px'}}>
                <Grid item xs={3}>
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
                                   <b>286 / 300</b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={3}>
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
                                <SparkLine alldetails={[100,200,150,80,100,120,200]} chartColors={'rgba(75, 192, 192,0.8)'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'green'}} >
                                     <b> 199 </b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={3}>
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
                                <SparkLine alldetails={[80,80,90,110,150,70,200]} chartColors={'rgba(255, 159, 64,0.8)'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'orange'}} >
                                     <b> 87</b> 
                                </Typography>
                            </Grid>
                            </Grid>
                            </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={3}>
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
                            <Grid item xs={6}>
                                <SparkLine alldetails={[80,80,90,110,150,70,200]} chartColors={'rgba(255, 39, 30)'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{textAlign: 'center', marginLeft:'1vw', color:'red'}} >
                                     <b>1 </b> 
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
export default connect(null,{})(withTheme(theme)(withStyles(styles)(OverviewWidgetOne)));