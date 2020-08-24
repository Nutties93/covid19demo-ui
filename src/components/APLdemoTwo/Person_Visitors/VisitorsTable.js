import React, {Fragment,useEffect, useState, useContext } from 'react';

import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from "../../../MainTheme.js"
import {Grid,Table,TableBody,TableCell,TablePagination,TableRow,TableHead,Button, Typography,
  FormControl,Input,InputLabel,IconButton,Card,CardContent} from '@material-ui/core';
// import {getAreaSummary,getAreaInfoById,getTotalHoursByArea} from "../../actions/widgetAction";
import {connect} from "react-redux";
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./VisitorsTableStyles";
import { LocationContext } from "../../../contexts/LocationContext";

import { CSVLink, CSVDownload } from "react-csv";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CachedIcon from '@material-ui/icons/Cached';

import { VisitorContext } from '../../../contexts/VisitorContext';

function VisitorsTable(props) {
      const { classes } = props;

      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(10);   //5
      const {isDarkMode} = useContext(ThemeContext);      
      const [emptyRows,setEmptyRows] = useState(0);
      const [refresh, setRefresh] = useState(0);

      const {visitor, handleClickButton  } = useContext(VisitorContext);

      function handleChangePage(event, newPage) {
        setPage(newPage);
      }

      function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      }


      useEffect(()=>{
        setEmptyRows(rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage));
      },[props.rows,page])

      function loadTable(){
        return(
        props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (row,index) => (
          <TableRow key={index} >
            <TableCell align="center" component="th" scope="row"
            className={classes.avatarcell}>
              <IconButton
                style={{padding:'0',color:theme.palette.common.darkgrey}}
                // aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                size={'small'}>
                  {<img id={"image" + index} alt='Avatar Img' src={'data:image/png;base64,' +  row.imageBase64} height="100%" width="100%"/>}
              </IconButton>
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
            <Grid container   
                alignItems='center'
                justify='center' 
                spacing={8} >
                <Grid item xs={12}>
                  <Button
                  name="visitorName"
                  value={row.employeeName}
                  onClick={(evt) => handleClickButton(evt,row.temperature)}>
                      <Typography                    
                      variant="h5"   
                      style={{textAlign: 'center', color:'black', fontWeight:'400'}} gutterBottom
                      >
                          {row.employeeName}
                      </Typography> 
                  </Button>     
                  </Grid>
                </Grid>
            </TableCell>

            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <IconButton
                  className= {(row.latestTimestamp ==="") ?  classes.darkgrey : (new Date() - new Date(row.latestTimestamp) < 7200000)                    
                    ?  classes.blue : classes.darkgrey  }    
                  style={{padding:'0'}}
                  // aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  size={'small'}>
                    <CachedIcon style={{fontSize:'3rem'}}/>
              </IconButton>
            </TableCell>

            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <IconButton         
                  className= {(index === 3) ? classes.orange : classes.darkgrey }         
                  style={{padding:'0'}}
                  // aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  size={'small'}>
                    <ErrorIcon style={{fontSize:'3rem'}}/>
              </IconButton>
            </TableCell>

            { (row.temperature==="") ? 
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <Typography                    
              variant="h5"   
              style={{textAlign: 'center', color:'black', fontWeight:'400'}} gutterBottom
              >
                NA
              </Typography>   
            </TableCell> 
            :   
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <Typography                    
              variant="h5"   
              style={{textAlign: 'center', color:'black', fontWeight:'400'}} gutterBottom
              >
                  {parseFloat(parseFloat(row.temperature).toFixed(1))} oC
              </Typography>   
            </TableCell>
            
            
            }
          </TableRow>
        ))
        )
      }

      function loadEmptyRows(){
        return(
          <TableRow >
            <TableCell colSpan={4} style={{ height: 8 * emptyRows +'vh'}}/>
          </TableRow>
        )
      }

  return (
    <Fragment>

    <Grid container   
    alignItems="center"
    justify="center"        
    >                 
    <Grid item xs={12}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableBody>
                {loadTable()}
                {emptyRows > 0 && loadEmptyRows()}
              </TableBody>
              </Table>
              <TablePagination    
                component="div"     
                classes={{
                  root: classes.tablePagination,
                  caption: isDarkMode ? classes.tablePaginationCaptionDark : classes.tablePaginationCaption,
                  // selectIcon: classes.tablePaginationSelectIcon,
                  // select: classes.tablePaginationSelect,
                  actions: isDarkMode ? classes.tablePaginationActionsDark: classes.tablePaginationActions ,
                }}
                // rowsPerPageOptions={[5, 7, 10]}
                colSpan={5}                   // Important!!!!
                count={props.rows.length}
                rowsPerPageOptions={[]}       //added
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'props.rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
              </div>

        </Grid>
  
      </Grid>
    </Fragment>

  );
}

export default connect(null,{TablePaginationActions})(withTheme(theme)(withStyles(styles)(VisitorsTable)))