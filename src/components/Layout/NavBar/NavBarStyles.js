/* Orange Copyright restricted MVP */

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 0
  },
  toolbar:{
    [theme.breakpoints.up('md')] : {
      height: '66px'
    },
    [theme.breakpoints.down('sm')] : {
        height: '56px'
    },
    [theme.breakpoints.down('xs')] : {
        height: '50px'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color:'white'
  },
  title: {
    display: 'none',
    marginRight: theme.spacing.unit*5,
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  //  SIDEBAR
  fullList: {
    width: 'auto',
    margin: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '1.8rem',
    color:'black',
    lineHeight: 1.2,
    letterSpacing: '0.02em',
  },
  fullListActive: {
    width: 'auto',
    margin: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '1.8rem',
    color:'black',
    lineHeight: 1.2,
    letterSpacing: '0.02em',
    borderLeft: '5px solid grey'
  },
  drawer:{
    display:'flex', 
    flexDirection:'column',
    marginTop:'5vh',
    [theme.breakpoints.up('sm')] : {
        height:'75vh'
    },
    [theme.breakpoints.down('sm')] : {
        height:'70vh'
    },
    [theme.breakpoints.down('xs')] : {
        height:'70vh'
    }
  },

  sideBarImg:{
    [theme.breakpoints.up('md')] : {
      width: '8vw', 
    },
    [theme.breakpoints.down('md')] : {
        width: '14vw', 
    },
    [theme.breakpoints.down('sm')] : {
      width: '18vh', 
    },
    [theme.breakpoints.down('xs')] : {
        width: '15vh', 
    }
  },
  navBarImg:{
    [theme.breakpoints.up('sm')] : {
      width: '62px', 
      marginRight: '1.5vw'
    },
    [theme.breakpoints.down('sm')] : {
      width: '62px', 
      marginRight: '5vw'
    },
    [theme.breakpoints.down('xs')] : {
        width: '0vw', 
        marginLeft: '0vw',
        marginRight: '0vw',
        marginTop: '0vw'
    }
  },
  drawerDark: {
    width: 'auto',
    fontSize: '1.5rem',
    margin: '0.5rem',
    backgroundColor: theme.palette.common.darkgrey, 
    color: theme.palette.text.primary
  },
  drawerLight: {
      width: 'auto',
      fontSize: '1.5rem',
      margin: '0.5rem',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
  },
  hello:{
    position:'relative',
    marginRight: theme.spacing.unit*5,
    marginBottom: theme.spacing.unit*1.5,
    fontSize: '1.5rem'
  },
  switch:{
    marginRight: theme.spacing.unit*5
  },
  themetitle: {
    display: 'none',
    marginRight: theme.spacing.unit*1,
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  //MENUITEM
  menuItem: {
    color: theme.palette.common.white,
    fontSize: '1.5rem',
    // position: 'absolute',
    // left: '50%', 
    // top: '50%',
    // transform: 'translate(-50%, -50%)'
    '&:before': {
      borderWeight: '2px',
      borderType: 'solid',
      borderColor: theme.palette.common.white
    },
    '&:after': {
      borderWeight: '2px',
      borderType: 'solid',
      borderColor: theme.palette.primary.main
    }
  },
  inputLabelRoot: {       
    color: theme.palette.common.white, 
    '&$inputLabelFocused': { color: theme.palette.primary.main }
  },
  inputLabelFocused: {
    color: ''
  },
  icon: {
    fill: theme.palette.common.white
  },
  menuItemDisplay: {
    fontSize: '1.5rem',
    color:'black'
  },
  //ACCOUNTCIRCLE
  accountCircle: {
    fontSize: '3.2rem'
  },
  iconButton: {
    position: 'absolute',
    bottom: theme.spacing.unit* 1.5,
    right: theme.spacing.unit* 1,
    color:'white'
  }
});

export default styles;
