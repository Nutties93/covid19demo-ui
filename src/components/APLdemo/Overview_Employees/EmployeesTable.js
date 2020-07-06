import React, {Fragment,useEffect, useState, useContext } from 'react';

import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from "../../../MainTheme.js"
import {Grid,Table,TableBody,TableCell,TablePagination,TableRow,TableHead,Button, Typography,
  FormControl,Input,InputLabel,IconButton,Card,CardContent} from '@material-ui/core';
// import {getAreaSummary,getAreaInfoById,getTotalHoursByArea} from "../../actions/widgetAction";
import {connect} from "react-redux";
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./EmployeesTableStyles";
import { LocationContext } from "../../../contexts/LocationContext";

import { CSVLink, CSVDownload } from "react-csv";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CachedIcon from '@material-ui/icons/Cached';

function EmployeesTable(props) {
      const { classes } = props;

      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(8);   //5
      const {isDarkMode} = useContext(ThemeContext);      
      const [emptyRows,setEmptyRows] = useState(0);
      const [refresh, setRefresh] = useState(0);


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
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <IconButton
                style={{padding:'0',color:theme.palette.common.darkgrey}}
                // aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                size={'small'}>
                  <AccountCircle style={{fontSize:'6rem'}}/>
              </IconButton>
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
            <Grid container   
                alignItems='center'
                justify='center' 
                spacing={8} >
                <Grid item xs={12}>
                      <Typography                    
                      variant="h5"   
                      style={{textAlign: 'center', color:'black', fontWeight:'400'}} gutterBottom
                      >
                          Employee Name
                      </Typography>
                      <Typography                    
                      variant="h5" 
                      style={{textAlign: 'center', color:'black', fontWeight:'400'}}
                      gutterBottom >
                          Department
                      </Typography>       
                  </Grid>
                </Grid>
            </TableCell>
            
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              <IconButton
                  className= {(index % 2 == 1) ? classes.blue:classes.darkgrey }    
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
                  className= {(index % 2 == 1) ? classes.darkgrey : classes.orange}         
                  style={{padding:'0'}}
                  // aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  size={'small'}>
                    <ErrorIcon style={{fontSize:'3rem'}}/>
              </IconButton>
            </TableCell>

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
                colSpan={4}                   // Important!!!!
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

export default connect(null,{TablePaginationActions})(withTheme(theme)(withStyles(styles)(EmployeesTable)))