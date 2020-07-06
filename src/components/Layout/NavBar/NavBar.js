/* Orange Copyright restricted MVP */

import React, { useContext, useState, Fragment, useEffect } from 'react';
import {AppBar,Toolbar,IconButton,Typography,Paper,Switch} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './NavBarStyles';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { LocationContext } from '../../../contexts/LocationContext';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {userLogoutRequest} from '../../../actions/loginAction';
// RIGHT SIDE OF APP BAR
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
// IMPORT FOR SIDEBAR 
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//IMPORT CLOCK
import Clock from './Clock';
import history from '../../../history';
import { Cookies } from 'react-cookie';
import {getYardId} from '../../../actions/widgetAction';
import {connect} from 'react-redux';
import setAuthToken from '../../../actions/setAuthToken';
import MenuIcon from '@material-ui/icons/Menu';
import theme from "../../../MainTheme.js"

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { yardid, changeLocation } = useContext(LocationContext);
  const { classes } = props;
  const [siteidlist, setSiteidlist] = useState([]);
  const cookies = new Cookies();

  const[homeauth,setHomeauth] = useState(true);
  const[manageauth,setManageauth] = useState(false);
  const[accountauth,setAccountauth] = useState(false);

  //RIGHT SIDE OF APP BAR
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  
  function highlighttabs(){
    var url = window.location.href.split('/')
    if (url[url.length-1] === 'manageusers'){
      setHomeauth(false);
      setManageauth(true);
    } 
    else if (url[url.length-1] === ''){
      setHomeauth(true);
      setManageauth(false);
    } 
  }

  function navManageUsers(){
    history.push('/manageusers');    
  }

  function navOverview(){
    history.push('/');
  }

  function navAccount(){
    history.push('/Account');
  }


  function logout(){
      props.userLogoutRequest({'username': cookies.get('username')}).then(function (response) {
        cookies.remove('usrtoken');
        cookies.remove('username');
        setAuthToken(false);
        history.push('/Login');        
      })
      .catch(function (error) {
            console.log(error);
            cookies.remove('usrtoken');
            cookies.remove('username');
            setAuthToken(false)  ;
      });
  }

  //SIDEBAR
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };
    useEffect(()=>{
    highlighttabs();
    if(siteidlist.length===0){
      const cookies = new Cookies();
      if(cookies.get('username')){
      props.getYardId({}).then(function (response){
        setSiteidlist(response.data.yards);
      }).catch(function (error){
        console.log(error);
      });
    }
  }
  })

  const fullList = (
    <div className={classes.drawer}>
        <div>
          <Fragment>
            <MenuItem button selected={homeauth} className={classes.fullList} onClick={navOverview} 
            classes={{
              selected : classes.fullListActive}}>
              Overview</MenuItem>
            <Divider />
            <MenuItem button selected={manageauth} className={classes.fullList} onClick={navManageUsers} 
            classes={{
              selected : classes.fullListActive}}>
              Manage Users</MenuItem>
            <Divider />
            {/* {true && <MenuItem button disabled={false} selected={adminauth} className={classes.fullList} onClick={navAdmin} 
            classes={{
              selected : classes.fullListActive}}>
            Admin </MenuItem> } */}
          </Fragment>
        </div>
        <div style={{marginTop: 'auto'}}>
          <List>
            {['Terms of Service', 'Privacy Policy'].map((text, index) => (
              <ListItem key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{color:theme.palette.common.darkgrey}} /> : <MailIcon style={{color:theme.palette.common.darkgrey}}/>}</ListItemIcon>
                <ListItemText classes={{primary:classes.fullList}} primary={text}/>
              </ListItem>
            ))}
          </List>
        </div>
    </div>
  );

  return (
    <div className={classes.root}>
     {/* color={isDarkMode ? 'primary'  : 'secondary'} */}
      <AppBar position='static' >
        <Toolbar className={classes.toolbar}>          
          { cookies.get('username') && <IconButton className={classes.menuButton} onClick={toggleDrawer('left', true)}  aria-label='Menu'> 
           <MenuIcon/>
          </IconButton>}
              <span><img className = {classes.navBarImg} alt={'Logo for Navbar'}src={ require('../../../images/orange.png')}/></span>
          <Typography className={classes.title} variant='h4'>
            Orange IoTaas Platform - Demo Version
          </Typography>


         { cookies.get('username') && <Select 
          className={classes.menuItem} 
          value={yardid} 
          onChange={changeLocation}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }        
          }}
          classes={{
              icon: classes.icon,
              selectMenu: classes.inputLabelRoot,
              focused: classes.inputLabelRootFocused}}>  

            {siteidlist.map(element =>{
              return ( <MenuItem 
               className= {classes.menuItemDisplay} 
               value={element.yardId}
               key = {element.yardId} disabled>{element.yardName}</MenuItem>)})}
          </Select>}


          <div className={classes.grow} />

          <div >
            <SwipeableDrawer
              open={state.left}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}          
              elevation={0}>
            <Paper style={isDarkMode ?  
            {backgroundColor: '#e9e9e9',height:'100vh'}: {backgroundColor: '#1565c0',height:'100vh'} }>
              <img className={classes.sideBarImg} alt={'drawerlogo'} src={ require('../../../images/orange.png')}/>
              <div
                tabIndex={0}
                role='button'
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}>
                {fullList}
              </div>
            </Paper>
            </SwipeableDrawer>
          </div>

          {/* { isDarkMode
            ?           
            <Typography className={classes.themetitle} variant='h5' >
              Light Theme
            </Typography>
            : 
            <Typography className={classes.themetitle} variant='h5' >
              Dark Theme
            </Typography>
          }
          <Switch onChange={() => { props.onChangemethod(); toggleTheme();}} color='primary' className={classes.switch} />  */}

          <Clock />
          {(cookies.get('username') )&& (
            <Fragment>
            <Typography className={classes.hello} variant='h5' >
              Hello, {cookies.get('username')}!
            </Typography>
            <div>
              <IconButton
                className={classes.iconButton}
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup='true'
                onClick={handleMenu}>
                <AccountCircle className={classes.accountCircle} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem 
                className={classes.menuItemDisplay} onClick={handleClose}>Profile</MenuItem>
                <MenuItem 
                className={classes.menuItemDisplay} onClick={() => { handleClose(); navAccount();}} >My account</MenuItem>
                <MenuItem 
                className={classes.menuItemDisplay} onClick={() => { handleClose(); logout();}}>Log Out</MenuItem>
              </Menu>
            </div>
            </Fragment>
          )}          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default connect(null,{getYardId, userLogoutRequest})((withStyles(styles)(Navbar)));

