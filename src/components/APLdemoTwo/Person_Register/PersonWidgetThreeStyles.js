/* Orange Copyright restricted MVP */

const styles = theme => ({
    container: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(12, 1fr)'
        // gridGap: `${theme.spacing.unit * 3}px`,
      },
    red: {
        color: theme.palette.common.red,
        width: '100%'
    },
    teal: {
        color: theme.palette.common.teal,
        width: '100%'
    },
    orange: {
        color: theme.palette.common.orange,
        width: '100%'
    },
    green: {
        color: theme.palette.common.green,
        width: '100%'
    },
    input: {
        color: 'black',
        fontSize:'2rem',
        textAlign:'left',
        underline: {
            '&:before': {
              border: '2px solid #000',
            },
            '&:after': {
              border: '2px solid #000',
            },
          }    
    },
    inputlabel: { 
        root:{
            color: '#2196f3',
            fontSize:'2rem',
            '&$focused': {
                color: '#2196f3',
                fontSize:'1.5rem'  
            }
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
    textField:{
        [theme.breakpoints.up('md')] : {
            width:700, margin:'1vh'
        },
        [theme.breakpoints.down('md')] : {
            width:500, margin:'1vh'
        },
        [theme.breakpoints.down('sm')] : {
            width:300, margin:'1vh'
        },
    }   
});

export default styles;