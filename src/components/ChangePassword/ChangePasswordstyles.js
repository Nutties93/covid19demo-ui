/* Orange Copyright restricted MVP */
const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      paddingTop: theme.spacing.unit * 8,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.down('md')]: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      [theme.breakpoints.up('md')]: {
        width: '40vw',
        height: '50vh',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
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
      marginTop: theme.spacing.unit * 2    
    },
    submit: {
      marginTop: theme.spacing.unit * 5,
      fontSize:'1.5rem',
      marginBottom: theme.spacing.unit * 5
    },
    inputText:{
        fontSize:'2rem'
    },
    labelText:{
        fontSize:'2rem',
        top: 0,
        left: 0,
        position: 'absolute',
        color: theme.palette.common.white
    },
    sideBarImg:{
        [theme.breakpoints.up('md')] : {
            width: '12vw', 
            margin: '1vw'
        },
        [theme.breakpoints.down('sm')] : {
          width: '25vw', 
          margin: '2vw',
          marginBottom: '2vw'
        },
        [theme.breakpoints.down('xs')] : {
            width: '40vw', 
            marginTop: '5vw',
            marginBottom: '5vw'
        }
      },
  });

  export default styles