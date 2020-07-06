/* Orange Copyright restricted MVP */
const styles = theme => ({
    header: {
        backgroundColor: theme.palette.common.black,
        width: '100%',
        height:'2.5vh'
    },
    paperDark: {
      textAlign: 'center',
      whiteSpace: 'normal',
      wordBreak: 'break-all',
      marginBottom: theme.spacing.unit,
      border: '1px solid',
      borderColor: '#959A9D',
      borderWidth: '0.2rem',
      backgroundColor: theme.palette.common.darkgrey, 
      color: theme.palette.text.primary
    },
    paperLight: {
        textAlign: 'center',
        whiteSpace: 'normal',
        wordBreak: 'break-all',
        marginBottom: theme.spacing.unit,
        border: '1px solid',
        borderColor: '#959A9D',
        borderWidth: '0.2rem',
        backgroundColor: theme.palette.common.lightgrey,
        color: theme.palette.text.secondary
    },
});
export default styles;