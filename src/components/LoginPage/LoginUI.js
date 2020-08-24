/* Orange Copyright restricted MVP */
import React, {useState,useEffect, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './LoginUIstyles';
import { ThemeContext } from '../../contexts/ThemeContext';

import {connect} from 'react-redux';
import {userLoginRequest} from '../../actions/loginAction';
import setAuthToken from '../../actions/setAuthToken';
import history from '../../history';
import { useCookies, Cookies } from 'react-cookie';

// const injectGA = () => {
//   if (typeof window == 'undefined') {
//     return;
//   }
//   window.dataLayer = window.dataLayer || [];
//   function gtag() {
//     window.dataLayer.push(arguments);
//   } 
//   gtag('js', new Date());
//   gtag('config', 'UA-144837332-1');
// };
var passwordLength=  8;

//1 upper case, 1 lower case, 1 number
var oneNumUpLowPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// 1 numberic & 1 special char
var oneNumSpecialPattern=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

function LoginUI(props) {
  const cookie = new Cookies();
  const { isDarkMode } = useContext(ThemeContext);

  const [cookies, setCookie] = useCookies(['usrtoken']);
  const { classes } = props;
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setisLoading ]= useState(false);
  const [validMessage, setValidMessage] = useState('');
  const [isInvalid, setIsInvalid ]= useState(false);
  

  function validateForm(){
      return username.length > 0;
  }

  useEffect(()=>{
    setIsInvalid(false);
    setValidMessage('');

    if(password.length === 0 && username.length === 0){
      setIsInvalid(true);
      // console.error('Err::: Length validation failed');
      setValidMessage('Please enter username and password!');
    }    
    else if(password.length === 0){
      setIsInvalid(true);
      // console.error('Err::: Length validation failed');
      setValidMessage('Please enter password!');
    }    
    else if(password.length <= 7){
        setIsInvalid(true);
        // console.error('Err::: Length validation failed');
        setValidMessage('Length validation failed');
    }    
    else if(!password.match(oneNumUpLowPattern)){
        setIsInvalid(true);
        // console.log('Err::: There should be atleast 1 upper case, 1 lower case and 1 number');
        setValidMessage('There should be atleast 1 upper case, 1 lower case and 1 number');
    }    
    else if(!password.match(oneNumSpecialPattern)){
        setIsInvalid(true);
        // console.log('Err::: Password should have atleast 1 number and 1 special char');
        setValidMessage('Password should have atleast 1 number and 1 special char');
    }     
  },[password]);
  
  function handleChangeUser(event){
      setusername(
        event.target.value
      );
    }
  
  function handleChangePassword(event){
      setpassword(
        event.target.value
      );
  }

  function handleSubmit(event){
      event.preventDefault();
      setisLoading(true);      
      props.userLoginRequest({username, password}).then(function (response) {
      var respcode = response.data['respcode'];
      if(respcode ===1200||1201){
        //If login successful, store user token

        // const usrtoken = response.data['token'];
        const usrtoken = "NOTOKENS FOR NOW";
        //remove commented code before deployment - need to test if works during deployment 
        setCookie('usrtoken', usrtoken, { /*httpOnly: true,secure: true,*/maxAge: 360000, sameSite:true });
        setAuthToken(usrtoken);
        setCookie('username', username, {/* httpOnly: true,secure: true,*/maxAge: 360000, sameSite: true });
        history.push('/');       
        // get the decoded payload and header: eventually. Uncomment
        /* var decoded = jwt.decode(usrtoken, {complete: true});
        console.log(decoded.header);
        console.log(decoded.payload);*/
      }
      else if(respcode ===1201){
        history.push('/passwordreset');
      }
      else{
        seterrorMessage(response.data['description']);
        setisLoading(false);
      }
    })
        .catch(function (error) {
          console.log(error);
          setisLoading(false);
    })
    }


    useEffect(()=>{
      if(cookie.get('username')) {
          history.go(1);
      }
    });

  return (
    <main className={classes.main}>
      <Paper className={classes.paper} 
      style={isDarkMode ? 
      {background: '#343a40'} : {background: '#67809f'} }>
        <img className={classes.sideBarImg} alt ='PSAlogo' src={ require('../../images/orange.png')} />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{fontSize:'4rem'}}/>
        </Avatar>
        { errorMessage && <div className='alert alert-danger'>{errorMessage}</div> }
        { validMessage && <div className='alert alert-danger'>{validMessage}</div> }
        <Typography style={{fontSize:'2rem'}}>
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl  required fullWidth>
            <InputLabel className={classes.labelText} htmlFor='username'>Username</InputLabel>
            <Input 
            id='email' 
            name='email' 
            autoComplete='email'  
            className={classes.inputText}
            style={{marginTop:'2.5rem',marginBottom:'3rem'}}
            value={username} 
            onChange={handleChangeUser} 
            autoFocus/>
          </FormControl>
          <FormControl  required fullWidth>
            <InputLabel className={classes.labelText}  htmlFor='password'>Password</InputLabel>
            <Input 
            className={classes.inputText}
            style={{marginTop:'2.5rem'}}
            name='password' 
            type='password' 
            id='password' 
            value={password} 
            onChange={handleChangePassword} 
            autoComplete='current-password'/>
          </FormControl>
          <FormControlLabel
            style={{marginTop: '2rem'}}
            control={<Checkbox value='remember' color='primary' />}
            label={<Typography style={{fontSize:'1.3rem'}}>Remember me</Typography>}/>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick= {handleSubmit}
            disabled={!validateForm() || isLoading || isInvalid}>
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default connect (null, {userLoginRequest})(withStyles(styles)(LoginUI));