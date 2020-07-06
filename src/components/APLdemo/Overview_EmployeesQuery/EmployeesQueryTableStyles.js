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
      width: 'auto', 
    },
    submitcsv: {
      fontSize:'2rem',
      width: '10%', 
      margin:'1vh',
      fontColor: 'white'
    },
    formControl: {
      marginRight: theme.spacing.unit * 5,
      width: '12vw', 
    },
    inputText:{
      fontSize:'1.5rem',   
      color:theme.palette.common.black,
    },
    labelText:{
        fontSize:'1.5rem',
        top: 0,
        left: 0,
        position: 'absolute',
        // color: theme.palette.common.white,
    },
    table: {
      width: '100%',

    },
    tableWrapper: {
      height:'100%',   

      backgroundColor:theme.palette.common.lightgrey,
      margin:0
    },
    //Cell Header
    tablecellheader: {
      color:  theme.palette.common.orange,
      backgroundColor:'white',
      fontSize: '2rem',
      flexShrink: 0,
      padding:'0',
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      width: "auto",
      height:'5vh'
    },
    //Cell Body
    tablecell: {
      color: 'white',
      fontSize: '2rem',
      flexShrink: 0,
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      padding: 0,
      height:'5vh',
      width: "auto",
      margin:0
    },
    tablecellDark: {
      color: 'black',
      fontSize: '2rem',
      flexShrink: 0,
      whiteSpace: 'normal',  wordWrap: 'break-word', wordBreak: "break-word",
      padding: 0,
      height:'5vh',
      width: "auto",
      margin:0
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

    // SEARCH BUTTON
    searchroot: {
      display: 'flex',
      alignItems: 'center',
      width: 350,
      backgroundColor: theme.palette.common.white,
      marginTop: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    input: {
      marginLeft: theme.spacing.unit * 2,
      flex: 1,
    },
    inputSearchText: {
      flex: 1,
      fontSize:'1.5rem',
      color: theme.palette.common.black,
    },
    iconButton: {
      padding: 10,
      color: theme.palette.common.darkgrey,
    },
    divider: {
      height: 30,
      margin: 4,
    },
    //csv button
    csvButton: {
      marginTop: theme.spacing.unit * 2,
    },
  });

  export default styles;