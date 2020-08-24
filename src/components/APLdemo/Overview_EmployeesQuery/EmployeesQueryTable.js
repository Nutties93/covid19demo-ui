import React, {Fragment,useEffect, useState, useContext } from 'react';

import { withStyles,withTheme } from '@material-ui/core/styles';
import theme from "../../../MainTheme.js"
import {Grid,Table,TableBody,TableCell,TablePagination,TableRow,TableHead, Typography,
  FormControl,Input,InputLabel,IconButton,Card,CardContent, InputBase,Divider, Paper,Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,} from '@material-ui/core';
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
import {future14DaysDate,getToday} from '../../../actions/common_functions';
import {searchEmployee,getEmployeeDetails,getEmployeeTracingDetails,setEmployeeQuarantine} from '../../../actions/widgetAction';



function EmployeesQueryTable(props) {
      const { classes } = props;

      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(6);   //5
      const {isDarkMode} = useContext(ThemeContext);      
      const [emptyRows,setEmptyRows] = useState(0);
      const [refresh, setRefresh] = useState(0);
      const { siteid } = useContext(LocationContext);
      const [open, setOpen] = useState(false);
      const [searchnamelist,setSearchnamelist] = useState([])
      const [searchname,setSearchname] = useState("")
      const [selectedname,setSelectedname] = useState("")
      const [selectednameID,setSelectednameID] = useState("")
      const [employeeDetails,setEmployeeDetails] =useState({})
      const [rows, setRows] = useState([]);
      const [selectedFromDate,setSelectedFromDate] = useState(future14DaysDate())
      const [selectedToDate,setSelectedToDate] = useState(getToday())
      
      useEffect(()=>{
        setRows([]);
        setEmployeeDetails({});
        setSelectedname("");
        setSelectednameID("");

      },[siteid])

      // API calls
      function searchEmployee(evt){
        evt.preventDefault();
        props.searchEmployee({siteid,"name": searchname }).then( function (response) {
          if(response.data.respcode===1200){
            setSearchnamelist(response.data.searchEmmployeesResult)
            setSearchname("")
            setOpen(true);
          }
          }).catch(function (error) {
            setSearchnamelist([])
            console.log(error);
          });   
      }

      function searchEmployeeDetails(evt){
        props.getEmployeeDetails({siteid,"employeeid": selectednameID }).then( function (response) {
          if(response.data.respcode===1200){            
            setEmployeeDetails(response.data.employeedetails)
            console.log(response.data.employeedetails)
          }
          }).catch(function (error) {
            setEmployeeDetails({})
            console.log(error);
          });   
          props.getEmployeeTracingDetails({siteid,"employeeid": selectednameID }).then( function (response) {
            if(response.data.respcode===1200){
              console.log(response.data)
              setRows(response.data.contactTracingDetails)
            }
            }).catch(function (error) {
              setRows([])
              console.log(error);
            }); 
      }

      function setQuarantine(){
        props.setEmployeeQuarantine({siteid,"employeeid": selectednameID, "From": selectedFromDate , "To": selectedToDate }).then( function (response) {
          if(response.data.respcode===1200){
            setRows(response.data.contactTracingDetails)
          }
          }).catch(function (error) {
            setRows([])
            console.log(error);
          });   
      }

      // children components
      function handleModalBody(){
        return(
          <Grid container   
          alignItems="center"
          justify="center"       
          >      
          <Grid item xs={12}>
            {searchnamelist.map((name)=>(
                <Button id={name.employeeId} value={name.employeeName} variant='contained' onClick={handleSelectedName}
                color='primary'style={{fontSize:'1.5rem',margin:"3px"}}>
                  {name.employeeName} 
                </Button>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" style={{marginTop:'2vh',color:"black" }}> Selected Name: <b>{selectedname}</b></Typography>
          </Grid>
          </Grid>
        );
      }  

      function loadTable(){
        return(
        rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (row,index) => (
          <TableRow key={index}  >
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row.date.slice(0,10)} {row.date.slice(11,19)}
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row.employeeName}
            </TableCell>
            <TableCell align="center" component="th" scope="row"
            className={isDarkMode ? classes.tablecellDark : classes.tablecell}>
              {row.distanceAverage}
            </TableCell>
          </TableRow>
        ))
        )
      }

      function displayEmployeeCard(){
        if(employeeDetails.imageBase64 === undefined){
          return(
            <Card style={{backgroundColor:'#FFF', marginBottom: '1vh'}}>
              <CardContent style={{padding:"5px"}}>
              <Grid container direction="row" justify="flex-end" alignItems="center"  >
              <Grid item xs={1} > </Grid>
                <Grid item xs={3} style={{height: '13vh'}}>
                </Grid>
              </Grid>
              </CardContent>
            </Card> );
        }
        else{   
          return(
            <Card style={{backgroundColor:'#FFF', marginBottom: '1vh'}}>
              <CardContent style={{padding:"5px"}}>
              <Grid container direction="row" justify="flex-end" alignItems="center"  >
              <Grid item xs={1} > </Grid>
                <Grid item xs={3} style={{height: '13vh'}}>
                <img id="image" alt='Avatar Img' src={'data:image/png;base64,' +  employeeDetails.imageBase64} height="100%" width="100%"/>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Name : </Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Department : </Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> Role :</Typography>
                  <Typography variant="h5"  style={{textAlign: 'right', marginLeft:'1vw', color:'black', fontWeight:'600'}}> ID :</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> {employeeDetails.employeeName} </Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> {employeeDetails.departmentName} </Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> {employeeDetails.role}</Typography>
                  <Typography variant="h5"  style={{textAlign: 'left', marginLeft:'1vw', color:'black', fontWeight:'400'}}> {employeeDetails.employeeId}</Typography>
                </Grid>
              </Grid>
              </CardContent>
            </Card> );
        }
      }
      
      function displayQuarantineCard(){
        if (employeeDetails.status === undefined){
          return(
            <Fragment></Fragment>
          );
        } else if (employeeDetails.status === "Cleared"){
          return(
            <Fragment>
              <FormControl  required >
                    <TextField
                      id="datetime-local"
                      label="From"
                      type="datetime-local"
                      // defaultValue= {}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                        className:classes.inputText
                      }}
                      inputProps={{
                        className:classes.inputText
                      }}
                      value={selectedFromDate}
                      onChange={handleFromDate}
                    />
              </FormControl>
              <FormControl required>
              <TextField
                      id="datetime-local"
                      label="To"
                      type="datetime-local"
                      // defaultValue= {}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                        className:classes.inputText
                      }}
                      inputProps={{
                        className:classes.inputText
                      }}
                      value={selectedToDate}
                      onChange={handleToDate}
                    />
              </FormControl>
  
              <Button type='submit' variant='contained' color='primary' className={classes.submit}
                // onClick= {setQuarantine}
                // disabled={!validateForm() || isLoading || isInvalid}
                style={{marginLeft:'2vh'}}
                >
                Set Quarantine
              </Button>
            </Fragment>
          );
        } else{
          return(
            <Fragment>
              <FormControl Disabled >
                    <TextField
                      label="From"
                      value= {employeeDetails.from}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                        className:classes.inputText
                      }}
                      inputProps={{
                        className:classes.inputText
                      }}
                    />
              </FormControl>
              <FormControl  Disabled>
              <TextField
                      label="To"
                      value= {employeeDetails.to}
                      className={classes.textField}
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
                style={{marginLeft:'2vh'}}
                >
                Clear Quarantine
              </Button>
            </Fragment>
          );
        }

      }


      // UI components handlers
      function loadEmptyRows(){
        return(
          <TableRow >
            <TableCell colSpan={4} style={{ height: 5 * emptyRows +'vh'}} align="center" component="th" scope="row"/>
          </TableRow>
        )
      }

      function handleSearchname(evt){
        evt.preventDefault();
        setSearchname(evt.target.value)
      }

      function handleSelectedName(evt){
        setSelectedname(evt.currentTarget.value)
        setSelectednameID(evt.currentTarget.id)
      }

      function handleToDate(evt){
        setSelectedToDate(evt.target.value)        
      }

      function handleFromDate(evt){
        setSelectedFromDate(evt.target.value)
      }

      const handleClose = () => {
        setOpen(false);
      };

      function handleChangePage(event, newPage) {
        setPage(newPage);
      }

      function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      }

      useEffect(()=>{
        setEmptyRows(rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage));
      },[rows,page])

  return (
    <Fragment>

    <Grid container   
    alignItems="center"
    justify="center"       
    style={{height:'100%',padding:'5px'}}>                     
    <Grid item xs={12} >
    <Card className={classes.card} style={{backgroundColor:'#e9e9e9'}}>
        <CardContent>
        <Grid container direction="row" justify="flex-end" alignItems="center" spacing={8} >
            <Grid item xs={12} md={5}>
              {displayEmployeeCard()}
            </Grid>
            <Grid item xs={12}  md={7}>
              <Grid container direction="row" justify="center" alignItems="center" >
                {displayQuarantineCard()}
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                  <Paper component="form" className={classes.searchroot}>
                    <InputBase
                      type="input"
                      className={classes.input}
                      placeholder="Search by Employee Name"
                      inputProps={{ "aria-label": "search",className: classes.inputSearchText}}
                      value={searchname}
                      onChange={handleSearchname}
                      color={theme.palette.common.black }
                    />
                    <IconButton
                      type="submit"
                      className={classes.iconButton}
                      aria-label="search"
                      size={'small'}
                      onClick={(evt) =>{searchEmployee(evt); }}
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
                     <CSVLink data={rows} filename={ new Date().toIsoString().slice(0,10) + 'exporteddata' + ".csv"}>
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
                count={rows.length}
                rowsPerPageOptions={[]}       //added
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
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

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{backgroundColor: theme.palette.common.lightgrey, padding:'0',margin:'0' }}> 
          
          <Typography style={{textAlign:"center", fontSize:"3rem",color:"black", fontWeight:600,margin:'5px',borderBottom:"2px solid black"}}> Search Results </Typography>
          
          </DialogTitle>
          <DialogContent style={{backgroundColor: theme.palette.common.lightgrey}}>
            <DialogContentText >
              {handleModalBody()}
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{backgroundColor: theme.palette.common.lightgrey, padding:'0',margin:'0',borderTop:"2px solid black"}}>
            <Button onClick={()=>{handleClose(); searchEmployeeDetails(); }} color="primary" style={{fontSize:'2rem',margin:'3px'}} >
              Search
            </Button>
          </DialogActions>
        </Dialog> 
    </Fragment>

  );
}

export default connect(null,{TablePaginationActions,searchEmployee,getEmployeeDetails,getEmployeeTracingDetails,setEmployeeQuarantine})(withTheme(theme)(withStyles(styles)(EmployeesQueryTable)))