/* Orange Copyright restricted MVP */
import React, {useState} from 'react';
import Validator from 'validator';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './ChangePasswordstyles';


function ChangePassword(props) {
  const { classes } = props;
  const [confirmpassword, setconfirmpassword] = useState('');
  const [password, setpassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setisLoading ]= useState(false);

  function validateForm() {
      return password.length > 0 && confirmpassword.length > 0;
    }
    
  function validatePassword() {
    if(!Validator.equals(password,confirmpassword)){
        seterrorMessage('Passwords do not match');
      }
    }
  
  function handleChangePassword(event) {
      setpassword(
        event.target.value
      );
    }
  
  function handleChangePasswordConfirm(event) {
      setconfirmpassword(
        event.target.value
      );
  }

  function handleSubmit(event){
      event.preventDefault();
      //setisLoading(true)
    }

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <img className={classes.sideBarImg} alt = 'LCRA logo' src={ require('../../images/LCRA.png')}/>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{fontSize:'4rem'}}/>
        </Avatar>
        { errorMessage && <div className='alert alert-danger'>{errorMessage}</div> }
        <Typography style={{fontSize:'2rem'}}>
          Password Confirmation
        </Typography>
        <form className={classes.form}>
          <FormControl  required fullWidth>
            <InputLabel className={classes.labelText} htmlFor='Password'>Password</InputLabel>
            <Input 
            id='password' 
            type='password'
            name='password' 
            autoComplete='Password'  
            className={classes.inputText}
            style={{marginTop:'2.5rem',marginBottom:'3rem'}}
            value={password} 
            onChange={handleChangePassword} 
            autoFocus />
          </FormControl>
          <FormControl  required fullWidth>
            <InputLabel className={classes.labelText}  htmlFor='confirmpassword'>Confirm Password</InputLabel>
            <Input 
            className={classes.inputText}
            style={{marginTop:'2.5rem'}}
            name='confirmpassword' 
            type='password' 
            id='confirmpassword' 
            value={confirmpassword} 
            onChange={handleChangePasswordConfirm} 
            autoComplete='Confirm Password'/>

          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick= {(event) => { handleSubmit(event); validatePassword();}}
            disabled={!validateForm() || isLoading}>
            Confirm Password
          </Button>
        </form>
      </Paper>
    </main>

  );
}

export default withStyles(styles)(ChangePassword);

