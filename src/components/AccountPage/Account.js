/* Orange Copyright restricted MVP */

import React,{useState}  from 'react';
import history from '../../history';
import { withTheme } from '@material-ui/core/styles';
import theme from '../../MainThemeLight.js';
import {Button,Paper,Typography,Modal,Card,CardContent }from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './Accountstyles';
import { Cookies } from 'react-cookie';
import {connect} from 'react-redux';
import setAuthToken from '../../actions/setAuthToken';
import {userLogoutRequest} from '../../actions/loginAction';


function Account(props) {
  const { classes } = props;
  const cookies = new Cookies();
  const [openModal,setOpenModal] =  useState(false);    
  
  function handleSubmit(event){
    event.preventDefault();
    history.push('/');
  }
  function handleModal(){
    setOpenModal(true);
  }
  function closeModal(){
    setOpenModal(false);
  }

  function logout(){
    props.userLogoutRequest({'username': cookies.get('username')}).then(function () {
          cookies.remove('usrtoken');
          cookies.remove('username');
          setAuthToken(false);
          history.push('/');        
        })
        .catch(function (error) {
          console.log(error);
          cookies.remove('usrtoken');
          cookies.remove('username');
          setAuthToken(false);
    });
  }

  return (      
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography style={{fontSize:'5rem',marginTop:'2vh'}} gutterBottom>
          Account page
        </Typography>
        <img className={classes.sideBarImg} alt ='LCRA logo' src={ require('../../images/orange.png')} />
        <Typography align='left' variant='h2' style={{margin:'3vh'}} gutterBottom>
          Your Account details are as follows:
        </Typography>
        <Typography variant='h2' style={{margin:'1vh'}} gutterBottom>
          {cookies.get('username')}
        </Typography>
        <Typography variant='h2' style={{margin:'1vh'}}>
          user@onmicrosoftMCD.com
        </Typography>
        <form className={classes.form}>
          <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick= {handleModal}
          >
            Change Password
          </Button>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}>
            Go Back to HomePage
          </Button>

          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={logout}>
            Log Out
          </Button>
          </form>
      </Paper>              
      <Modal
          open={openModal}
          onClose={closeModal}>           
          <Card className={classes.card} style={{backgroundColor: theme.palette.common.lightgrey}}>   
            <CardContent style={{padding: '0px'}}>
              <div className={classes.modal} >
                <div style={{paddingLeft:'3vw',paddingRight:'3vw',paddingTop:'5vh',paddingBottom:'3vh'}}>
                  <Typography variant='h2' style={{color: theme.palette.common.black}} gutterBottom> 
                    Click on 'Agree' to allow us to access your account information in Microsoft Azure Active Directory.
                  </Typography> 
                </div>
                <div style={{marginTop: 'auto',marginBottom:'auto',padding:'2vw'}}>
                  <div style={{marginLeft:'15%',width:'70%',fontSize:'2.1rem'}} className='alert-info'> 
                  You will be redirected to the microsoft page!
                  </div> 
                </div>
                <div style={{marginTop: 'auto',paddingLeft:'3vw',paddingRight:'3vw',paddingTop:'2vh'}}>
                  <Button
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick={closeModal}>
                    Agree
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
      </Modal>
      
    </main>
  );
}

export default connect(null,{ userLogoutRequest})(withTheme(theme)(withStyles(styles)(Account)));