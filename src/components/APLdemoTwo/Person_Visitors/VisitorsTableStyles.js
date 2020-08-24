const styles = theme => ({
    root: {
      width: '100%',
    },
    header: {
      backgroundColor: theme.palette.common.black,
      width: "100%",
    },
    submit: {
      fontSize:'1.5rem',
      width: '70%', 
    },
    submitcsv: {
      fontSize:'2rem',
      width: '10%', 
      margin:'1vh',
      fontColor: 'white'
    },
    form: {
      width: '70%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit * 2,
    },
    inputText:{
      fontSize:'2rem',        
    },
    labelText:{
        fontSize:'2rem',
        top: 0,
        left: 0,
        position: 'absolute',
        // color: theme.palette.common.white,
    },
    table: {
      width: '100%',
      height:'70vh',   //28vh
    },
    tableWrapper: {
      height:'100%',   //28vh
      // overflowX: 'auto',
      backgroundColor:theme.palette.common.lightgrey
    },
    //Cell Header
    tablecellheader: {
      color: 'white',
      backgroundColor:'white',
      fontSize: '2.3rem',
      flexShrink: 0,
      padding:'5px',
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      width: "auto",
      height:'100%'
    },
    //Cell Body
    tablecell: {
      color: 'white',
      fontSize: '2rem',
      flexShrink: 0,
      padding:'10px',
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      height:'8vh',
      width: "auto"
    },
    tablecellDark: {
      color: 'black',
      fontSize: '2rem',
      flexShrink: 0,
      padding:'10px',
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      height:'8vh',
      width: "auto"
    },
    avatarcell: {
      flexShrink: 0,
      padding:'5px',
      width:"8vh"
    },
    tablePagination: {
      display:'flex',
      flexDirection: 'row',
      width: "100%",  
      justifyContent: 'flex-end', // justifyContent: 'space-evenly'
      overflowX: 'auto',
    },
    tablePaginationCaption: {
        color: 'white',
        fontSize: '1.5rem',
        marginRight:'2vw',
        // width: '100%',
        lineHeight: 1.2,
        letterSpacing: "0.1em"
    },
    tablePaginationCaptionDark: {
        color: 'black',
        fontSize: '1.5rem',
        marginRight:'auto',
        // width: '100%',
        lineHeight: 1.2,
        letterSpacing: "0.1em"
    },
    // tablePaginationSelectIcon: {
    //     color: 'white',
    //     fontSize: '1.8rem'
    //   },
    // tablePaginationSelect: {
    //     color: 'white',
    //     fontSize: '1.8rem'
    //   },
    tablePaginationActions: {
        marginLeft:'auto',
    },
    tablePaginationActionsDark: {
        marginLeft:'auto',
    },
    red: {
      color:theme.palette.common.red
    },
    orange: {
      color:theme.palette.common.orange
    },
    blue: {
      color:theme.palette.common.blue
    },
    lightgrey: {
      color:theme.palette.common.lightgrey
    }
  });

  export default styles;