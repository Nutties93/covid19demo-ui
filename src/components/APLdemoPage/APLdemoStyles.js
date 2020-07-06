/* Orange Copyright restricted MVP */

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'none'
    },
    header: {
        backgroundColor: theme.palette.common.black,
        width: '100%'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)'
      // gridGap: `${theme.spacing.unit * 3}px`,
    },
    divider: {
      margin: `${theme.spacing.unit * 2}px 0`
    },
    navigationLabel:{
      fontSize:'2rem'
    }
  });
export default styles;