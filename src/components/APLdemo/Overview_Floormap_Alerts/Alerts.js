/* Orange Copyright restricted MVP */
import React, {Fragment,useEffect, useState, useContext} from 'react';
import {Typography,Grid,Card,CardActionArea,CardContent,Paper} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './AlertsStyles';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js'
import { LocationContext } from '../../../contexts/LocationContext';
import {getSiteSummaryData} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import WarningIcon from '@material-ui/icons/Warning';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Alerts(props){

    const { classes } = props;
    // const  isDarkMode  = useContext(ThemeContext);
    const { siteid } = useContext(LocationContext);
    const [refresh, setRefresh] = useState(300000);
    const [loading,setLoading] = useState(false);

    const [employees,setEmployees]=useState({});


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
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                            <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Bengal Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.red, height:'4vh'}} >
                                   <b> 3 </b> 
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
                                 </Typography>
                            </Grid> */}
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                <WarningIcon className={classes.blink} fontSize="large" style={{color: theme.palette.common.red,height:'4vh'}}/>
                                </div>        
                                <Typography variant="h5" component="p" className={classes.blink} 
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.red}} >                               
                                    <b> Overcrowded! </b> 
                                 </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                        <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Tasman Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.green, height:'4vh'}} >
                                   <b> 1 </b> 
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
                                 </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                            <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Java Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.green, height:'4vh'}} >
                                   <b> 2 </b> 
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
                                 </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                        <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Demo Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.green, height:'4vh'}} >
                                   <b> 2 </b> 
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
                                 </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                        <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Coral Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.green, height:'4vh'}} >
                                   <b> 0 </b> 
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
                                 </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>              
                </Grid>
                <Grid item xs={6}>
                    <Card style={{backgroundColor:'#e9e9e9'}}>
                        <CardContent>
                        <Typography                    
                            variant="h3" component="h2"  
                            style={{textAlign: 'center', color:'white', fontWeight:'600',backgroundColor:'black'}}
                            >
                                Andaman Room
                            </Typography>
                            <Grid container   
                            alignItems='center'
                            justify='center' 
                            spacing={0} style={{height:'8vh'}}>
                            <Grid item xs={6}>
                                <Typography variant="h1" component="p"
                                style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                color:theme.palette.common.green, height:'4vh'}} >
                                   <b> 1 </b> 
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{height:'4vh'}}>    
                                <div style={{  display: 'flex', justifyContent:'center'}}>
                                    <FiberManualRecordIcon fontSize="large" style={{color: theme.palette.common.green}}/>  
                                </div>        
                                <Typography variant="h5" component="p"
                                    style={{whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: 'break-word',textAlign: 'center', 
                                    color:theme.palette.common.green}} >                               
                                    <b> Healthy! </b> 
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
export default connect(null,{getSiteSummaryData})(withTheme(theme)(withStyles(styles)(Alerts)));