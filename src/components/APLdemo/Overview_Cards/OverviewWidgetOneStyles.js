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
    }
});

export default styles;