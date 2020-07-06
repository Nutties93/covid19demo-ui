/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */

import React, {Fragment, useState,useEffect,useContext} from 'react';
import {Grid,Typography,Card,CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './SparkLineStyles';
import {Chart,Bar,Line} from 'react-chartjs-2';


import theme from '../../../MainTheme.js';

import 'chartjs-plugin-datalabels';

const chartColors = {
red: 'rgba(255, 99, 132,0.8)',
orange: 'rgba(255, 159, 64,0.8)',
yellow: 'rgba(255, 205, 86,0.8)',
green: 'rgba(75, 192, 192,0.8)',
blue: 'rgba(54, 162, 235,0.8)',
purple: 'rgba(153, 102, 255,0.8)',
grey: 'rgba(201, 203, 207,0.8)'
};
Chart.defaults.global.defaultFontFamily = 'Roboto';


function SparkLine(props){
    const { classes } = props;

return (
<Fragment>
    <Grid container   
        alignItems='center'
        justify='center'   style={{height:'8vh', marginTop:'2vh'}} > 
        <Grid item xs = {12} >
                <Line 
                redraw={true}            
                data= {{
                    labels: props.alldetails,
                    datasets: [
                    {
                        label: 'Actual',
                        backgroundColor:  props.chartColors,
                        //borderColor: 'rgba(255,99,132,1)',
                        borderColor: props.chartColors,
                        fill: false,
                        borderWidth: 2,
                        data: props.alldetails,
                    }
                    ]
                }}
                options={{
                    plugins: {
                        datalabels: {
                            display: false,
                            anchor: 'end',
                            align: 'top',
                            formatter: Math.round,
                            color:  theme.palette.common.white
                        }
                        },
                    animation:false,
                    tooltips:{
                        enabled: true
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },                    
                    maintainAspectRatio: false,
                    legend :{
                        display: false,
                        position: 'top',
                        padding:'0',
                        labels: {                        
                            usePointStyle: true,
                            padding: 0,
                            // fontSyle: 'bold'   
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Date',
                                fontSize: 16,
                                fontColor:theme.palette.common.white,
                                padding: 0
                                },
                            ticks: {
                                display: false, //this will remove only the label
                                fontSize: 16,
                                fontStyle: 'normal',
                                fontColor:  theme.palette.common.white,
                            },
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Count',
                                fontSize: 16,
                                fontColor: theme.palette.common.white,
                                padding: 0
                                },
                            ticks: {
                                display: false, //this will remove only the label
                                beginAtZero: true,
                                fontSize: 16,
                                padding: 0,
                                fontColor: theme.palette.common.white,
                                suggestedMin: 20
                            },
                        }]
                    }
                    }
                }
                />
        </Grid>
    </Grid>  
</Fragment>
);

}

export default withStyles(styles)(SparkLine);