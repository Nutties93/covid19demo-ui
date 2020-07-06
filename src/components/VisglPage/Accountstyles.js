/* Orange Copyright restricted MVP */

const styles = theme => ({
  main: {
    width: 'auto',
    // Fix IE 11 issue.
    display: 'block', 
    paddingTop: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      height: '70vh',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.common.lightgrey,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    marginBottom: theme.spacing.unit,
    height: '6vh',
    width: '6vh',
    backgroundColor: theme.palette.common.lightgrey
  },
  form: {
    width: '85%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 5
  },
  submit: {
    // marginTop: theme.spacing.unit * 5,
    fontSize:'1.5rem',
    marginBottom: theme.spacing.unit * 5
  },
  card: {
    position: 'absolute',
    transform: `translate(32.5vw, 30vh)`, 
    height: '40vh',
    width:'35vw',
    boxShadow: theme.shadows[0],
    borderRadius: '10px',
    paddingBottom: '1vh',
    outline: 'none'
  },
  modal:{
    display:'flex', 
    flexDirection:'column',
    height: '40vh',
    width:'100%'
  },
  sideBarImg:{
    [theme.breakpoints.up('md')] : {
      width: '10vw'
    },
    [theme.breakpoints.down('sm')] : {
      width: '28vw', 
      margin: '1vw',
      marginBottom: '1vw'
    },
    [theme.breakpoints.down('xs')] : {
        width: '38vw', 
        marginTop: '1vw',
        marginBottom: '1vw'
    }
  }
});

export default styles