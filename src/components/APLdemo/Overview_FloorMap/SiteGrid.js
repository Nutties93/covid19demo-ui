/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */

import React, {Fragment,useRef, useState,useEffect,useContext} from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../../MainTheme.js';
// import {getNewsData,getWidgetConfig} from '../../actions/widgetAction';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {Cookies } from 'react-cookie';

const cookies = new Cookies();


function yuv2rgb(Y, U, V) {
  var R = Y + 1.4075 * (V - 128)
  var G = Y - 0.3455 * (U - 128) - (0.7169 * (V - 128))
  var B = Y + 1.7790 * (U - 128)
  return { r: Math.floor(R), g: Math.floor(G), b: Math.floor(B) }
}

function rgb2yuv(R, G, B) {
  var Y = R * 0.299000 + G * 0.587000 + B * 0.114000
  var U = R * -0.168736 + G * -0.331264 + B * 0.500000 + 128
  var V = R * 0.500000 + G * -0.418688 + B * -.081312 + 128
  return { y: Math.floor(Y), u: Math.floor(U), v: Math.floor(V) }
}

function SiteGrid(props) {

    const [ selectedlocation, setSelectedlocation ] = useState("NA");

    const canvasgrid = useRef(null);
    const canvasgridlabels = useRef(null);

    var gridOffset = 0.5;
    var borderPx = 2;
    var width = 1000;
    var height = 550;
    var row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
    var col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z','aa', 'bb', 'cc', 'dd', 'ee'];
    var coloredsquares = { r2:2, u2:3, w2:4, f17: 15, i18:10,c7:5 }
    // threshold = 70db
    // levels= [0.3,0.5,0.7]


    var rowsquareheight = height / row.length;
    var colsquarelength = width / col.length;

    function getSquare(canvas, evt) {
      var rect = canvas.current.getBoundingClientRect();
      return {
        x: borderPx + (evt.clientX - rect.left) - (evt.clientX - rect.left) % colsquarelength,
        y: borderPx + (evt.clientY - rect.top) - (evt.clientY - rect.top) % rowsquareheight
      };
    }

    //Find selected/hovered cell!
    function findGrid(mouseX, mouseY) {
      let endofrow = row.length * rowsquareheight;
      let endofcol = col.length * colsquarelength;
      let rowcount = 0;
      let colcount = 0;
      let rowid = 0;
      let colid = '';
      for (var y = rowsquareheight + gridOffset; y < endofrow + borderPx + gridOffset; y += rowsquareheight) {
        if (mouseY < y) {
          rowid = row[rowcount];
        } else {
          rowcount += 1;
        }
      }

      for (var x = colsquarelength + gridOffset; x < endofcol + borderPx + gridOffset; x += colsquarelength) {
        if (mouseX < x) {
          colid = col[colcount];
        } else {
          colcount += 1;
        }
      }
      let squareId = colid + rowid.toString();
      return squareId;
    }

    // Draw colored circles on coloredsqures
    function fillAllSquares(context) {
      let endofrow = row.length * rowsquareheight;
      let endofcol = col.length * colsquarelength;
      let rowcount = 0;

      let rowid = 0;
      let colid = '';
      var r = 0; var g = 0; var b = 0;

      for (var y = rowsquareheight + gridOffset; y < endofrow + borderPx + gridOffset; y += rowsquareheight) {
          rowid = row[rowcount];
          rowcount += 1;
          let colcount = 0;
          for (var x = colsquarelength + gridOffset; x < endofcol + borderPx + gridOffset; x += colsquarelength) {
              colid = col[colcount];
              colcount += 1;
              let squareId = colid + rowid.toString();
              Object.keys(coloredsquares).map((cellname,index)=>{
                if (squareId == cellname){             
                  var radius = 20;
                  context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ',0.3)'            
                  context.strokeStyle = "#0000FF"
                  context.lineWidth = 2;   

                  context.beginPath();                  
                  context.arc(x -colsquarelength/2 -gridOffset,y- rowsquareheight/2 - gridOffset
                  ,radius,Math.PI*0,Math.PI*2);
                  context.fill();
                  context.closePath();

                  context.beginPath();                  
                  context.arc(x -colsquarelength/2 -gridOffset,y- rowsquareheight/2 - gridOffset
                  ,radius,Math.PI*0.05,Math.PI*0.7);
                  context.stroke();
                  context.closePath();

                  context.beginPath();    
                  context.arc(x -colsquarelength/2 -gridOffset,y- rowsquareheight/2 - gridOffset
                    ,radius-5,Math.PI*0.125,Math.PI*0.625);
                    context.stroke();                  
                  context.closePath();

                  context.beginPath();    
                  context.arc(x -colsquarelength/2 -gridOffset,y- rowsquareheight/2 - gridOffset
                    ,radius-10,Math.PI*0.2,Math.PI*0.55);
                    context.stroke();
                  context.closePath();

                  context.fillStyle = "#0000FF"    
                  context.beginPath(); 
                  context.arc(x -colsquarelength/2 -gridOffset,y- rowsquareheight/2 - gridOffset
                    ,radius-15,0,Math.PI*2);
                    context.stroke();
                  context.fill();
                  context.closePath();
                }
              })
          }
      }

    }

    //DRAW GRID Lines on context2 with OFFSET 25px margin!
    function drawGrid(context) {
      for (var y = gridOffset; y < height + borderPx + gridOffset; y += rowsquareheight) {
        context.moveTo(0 + gridOffset + 25, y + 25);
        context.lineTo(width + gridOffset + 25, y + 25);
      }

      for (var x = gridOffset; x < width + borderPx + gridOffset; x += colsquarelength) {
        context.moveTo(x + 25, 0 + gridOffset + 25);
        context.lineTo(x + 25, height + gridOffset + 25);
      }
      context.strokeStyle = "rgb(" + 179 + "," + 179 + "," + 179 + ",0.2)";
      context.lineWidth = borderPx;
      context.stroke();
    }

    //DRAW GRID Labels on context2!
    function drawGridLabels(context2) {
      // width of 15px arial is 7.5, height : 15
      context2.font = "15px Arial";
      let rowcount = 0;
      let colcount = 0;
      // 30 is the margin of acutal grid.
      let rowlabelOffset = rowsquareheight / 2 + 30;
      let collabelOffset = colsquarelength / 2 + 30 - 7.5;
      // Labels logic are opposite to grid drawing.
      // for (var x = gridOffset; x < height; x += rowsquareheight) {
      //   context2.fillStyle = "red";
      //   context2.fillText(row[rowcount], 0, rowlabelOffset);
      //   rowcount += 1;
      //   rowlabelOffset += rowsquareheight;
      // }
      // for (var y = gridOffset; y < width; y += colsquarelength) {
      //   context2.fillStyle = "blue";
      //   context2.fillText(col[colcount], collabelOffset, 15 + gridOffset);  //15 is height of 15px
      //   colcount += 1;
      //   collabelOffset += colsquarelength;
      // }
    }


    // Display tooltip Text
    function handlemousemove(evt) {
      var mousePos = {};
      const context = canvasgrid.current.getContext("2d");
      context.clearRect(0,0,width,height);
      mousePos = getSquare(canvasgrid, evt);
      var selectedcell = findGrid(mousePos.x, mousePos.y);

      // context.fillText(selectedcell,mousePos.x+rowsquareheight/2-3, 
      //   mousePos.y + colsquarelength/2-3);
      if (coloredsquares[selectedcell] !== undefined &&  coloredsquares[selectedcell] <=3){
        context.fillStyle = 'rgb(' + 155 + ',' + 155 + ',' + 155 + ',0.8)' 
        context.fillRect(mousePos.x-rowsquareheight/2,mousePos.y + (colsquarelength*1), rowsquareheight*2.5, colsquarelength);

        context.font = "bolder 20px Verdana";
        context.fontWeight = 600;
        context.fillStyle = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ',1)';
        context.fillText(coloredsquares[selectedcell],mousePos.x+rowsquareheight/2-3, 
          mousePos.y + (colsquarelength*1.75));

      } else if (coloredsquares[selectedcell] !== undefined &&  coloredsquares[selectedcell] >3){
        context.fillStyle = 'rgb(' + 155 + ',' + 155 + ',' + 155 + ',0.8)' 
        context.fillRect(mousePos.x-rowsquareheight/2,mousePos.y + (colsquarelength*1), rowsquareheight*2.5, colsquarelength);

        context.font = "bolder 20px Verdana";
        context.fontWeight = 600;
        context.fillStyle = 'rgb(' + 255 + ',' + 0 + ',' + 0 + ',1)';
        context.fillText(coloredsquares[selectedcell],mousePos.x+rowsquareheight/2-3, 
          mousePos.y + (colsquarelength*1.75));
      }
      fillAllSquares(context);
    }

    // Clear all tooltips when leave
    function handleclearhover(evt) {
      const context = canvasgrid.current.getContext("2d");
      context.clearRect(0,0,width,height);
      fillAllSquares(context);
    }

    // Display Clicked Cell
    function handleonclick(evt) {
      var mousePos = {};
      mousePos = getSquare(canvasgrid, evt);
      var selectedcell = findGrid(mousePos.x, mousePos.y);
      if (coloredsquares[selectedcell] !== undefined ){
        //r2:2, u2:3, w2:4, f17: 15, i18:10
        switch(selectedcell){
          case "r2":
            setSelectedlocation("Bengal")
            break;
          case "u2":
            setSelectedlocation("Tasman")
            break;
          case "w2":
            setSelectedlocation("Java")
            break;
          case "f17":
            setSelectedlocation("Andaman")
            break;
          case "i18":
            setSelectedlocation("Coral")
            break;
          case "c7":
            setSelectedlocation("Demo Room")
            break;
        }
        // setSelectedlocation(selectedcell)
      }
    }

    useEffect(() => {
      const context = canvasgrid.current.getContext("2d");
      const context2 = canvasgridlabels.current.getContext("2d");
      drawGrid(context2);
      drawGridLabels(context2);
      fillAllSquares(context);
    }, []);

  
    return (    
        <Fragment>
            <Grid container   
            justify="center"
            alignItems="center"
            style={{height:'100%',padding:'5px'}}
            spacing={1}> 
              <Grid item xs={12}>
                <Card style={{backgroundColor:'#e9e9e9', height: '65vh'}}>
                    <CardContent>
                      <Grid container   
                      justify="center"
                      alignItems="center"
                      spacing={0}> 
                        <Grid item xs={12}>
                        <Typography variant="h4" style={{textAlign:'center',color:'black'}}>  Selected Location: <b>  {selectedlocation} </b></Typography>
                          <div style={{ position: "relative", height: height+80, overflow:'scroll'}} >
                              <img width={width} height={height} src={require('../../../images/floormapnew.png')} style={{
                                position: "absolute", left: 0,
                                top: 0, zIndex: 0, marginLeft: "30px", marginTop: "30px", pointerEvents: 'none', userSelect: 'none'
                              }}
                                disabled={false}
                                onDoubleClick={false}

                              ></img>

                              <canvas ref={canvasgrid} width={width} height={height} style={{
                                position: "absolute", left: 0,
                                top: 0, zIndex: 2, marginLeft: "30px", marginTop: "30px"
                              }}
                                onClick={evt => handleonclick(evt)}
                                onMouseMove={evt => handlemousemove(evt)}
                                onMouseLeave={evt => handleclearhover(evt)}
                              />

                              <canvas ref={canvasgridlabels} width={width + 50} height={height + 50} style={{
                                          position: "absolute", left: 0,
                                          top: 0, zIndex: 1, marginLeft: "5px", marginTop: "5px"
                                        }} />
                          </div>
                        </Grid>
                        {/* <Grid item xs={4}></Grid> */}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>                  
            </Grid>
        </Fragment>
    );
}

//Import Dependencies here! For higher order components, wrap here!
export default SiteGrid;
