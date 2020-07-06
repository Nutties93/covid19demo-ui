import React, {Fragment,useEffect, useState, useContext } from 'react';

import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from "../../../MainTheme.js"
import {Grid,Table,TableBody,TableCell,TablePagination,TableRow,TableHead, Typography,
  FormControl,Input,InputLabel,IconButton,Card,CardContent, InputBase,Divider, Paper,Button} from '@material-ui/core';
// import {getAreaSummary,getAreaInfoById,getTotalHoursByArea} from "../../actions/widgetAction";
import {connect} from "react-redux";
import  TablePaginationActions  from './TablePaginationActions';
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./EmployeesQueryTableStyles";
import { LocationContext } from "../../../contexts/LocationContext";
import { CSVLink, CSVDownload } from "react-csv";
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {past14DaysDate,getToday} from '../../../actions/common_functions';

import Image from './displayimage';


function EmployeesQueryTable(props) {
      const { classes } = props;

      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(7);   //5
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
          <TableRow key={index}  >
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row[0]}
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row[1]}
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row[2]}
            </TableCell>
          </TableRow>
        ))
        )
      }

      function loadEmptyRows(){
        return(
          <TableRow >
            <TableCell colSpan={4} style={{ height: 5 * emptyRows +'vh'}} align="center" component="th" scope="row"/>
          </TableRow>
        )
      }

  return (
    <Fragment>

    <Grid container   
    alignItems="center"
    justify="center"       
    style={{height:'100%',padding:'5px'}}>                     
    <Grid item xs={12} >
      <Card style={{backgroundColor:'#e9e9e9'}}>
        <CardContent>
        <Grid container direction="row" justify="flex-end" alignItems="center" spacing={8} >
            <Grid item xs={12} md={5}>
            <Card style={{backgroundColor:'#FFF', marginBottom: '1vh'}}>
              <CardContent style={{padding:"5px"}}>
              <Grid container direction="row" justify="flex-end" alignItems="center"  >
              <Grid item xs={1} > </Grid>
                <Grid item xs={3} style={{height: '13vh'}}>
                    <Image/>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Name : </Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Department : </Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Role :</Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> ID :</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> Marvin </Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> DI </Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> Engineer</Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> 1204215</Typography>
                </Grid>
              </Grid>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12}  md={7}>
              <Grid container direction="row" justify="center" alignItems="center" >
                <FormControl className={classes.formControl} required >
                      <TextField
                        id="datetime-local"
                        label="From"
                        type="datetime-local"
                        defaultValue= {getToday()}
                        className={classes.inputText}
                        InputLabelProps={{
                          shrink: true,
                          className:classes.inputText
                        }}
                        inputProps={{
                          className:classes.inputText
                        }}
                      />
                </FormControl>
                <FormControl className={classes.formControl}  required>
                <TextField
                        id="datetime-local"
                        label="To"
                        type="datetime-local"
                        defaultValue= {past14DaysDate()}
                        className={classes.inputText}
                        InputLabelProps={{
                          shrink: true,
                          className:classes.inputText
                        }}
                        inputProps={{
                          className:classes.inputText
                        }}
                      />
                </FormControl>

                <Button type='submit' variant='contained' color='primary' className={classes.submit}
                  // onClick= {handleSubmit}
                  // disabled={!validateForm() || isLoading || isInvalid}
                  >
                  Set Quarantine
                </Button>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                  <Paper component="form" className={classes.searchroot}>
                    <InputBase
                      className={classes.input}
                      placeholder="Search by Employee Name"
                      inputProps={{ "aria-label": "search",className: classes.inputSearchText}}
                      // value={searchpanelid}
                      // onChange={handleSearchPanelId}
                      color={theme.palette.common.black }
                    />
                    <IconButton
                      className={classes.iconButton}
                      aria-label="search"
                      size={'small'}
                      // onClick={handleSubmitPanelId}
                    >
                      <SearchIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                  </Paper>
                  <Button
                    type="submit"
                    variant="contained"
                    color="green"
                    className={classes.csvButton}
                  >
                     <CSVLink data={props.rows} filename={ new Date().toIsoString().slice(0,10) + 'exporteddata' + ".csv"}>
                       <div  style={{color: 'black'}}> Export CSV </div>
                     </CSVLink>
                  </Button>              
              </Grid>
            </Grid>
        </Grid>

          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead style={{backgroundColor:theme.palette.common.backgroundgrey}}>
                <TableRow >
                  <TableCell align="center" className={classes.tablecellheader} > Date </TableCell>
                  <TableCell align="center" className={classes.tablecellheader} > Employee Name</TableCell>
                  <TableCell align="center" className={classes.tablecellheader} > Approx Distance</TableCell>
                </TableRow>
              </TableHead>
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
                colSpan={3}                   // Important!!!!
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
            </CardContent>
          </Card>
        </Grid>
  
      </Grid>
    </Fragment>

  );
}

export default connect(null,{TablePaginationActions})(withTheme(theme)(withStyles(styles)(EmployeesQueryTable)))