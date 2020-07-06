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
        marginRight: 'auto',
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
    form: {
      width: '85%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit * 2
    },
    submit: {
      marginTop: theme.spacing.unit * 5,
      fontSize:'1.5rem',
      marginBottom: theme.spacing.unit * 5
    }
  });

  export default styles