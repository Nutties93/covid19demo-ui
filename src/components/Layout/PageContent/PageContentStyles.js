/* Orange Copyright restricted MVP */
const styles = theme => ({
    bodyLight:{
        [theme.breakpoints.up('md')] : {
            height: 'calc(100vh - 66px)',
            width: '100vw'
        },
        [theme.breakpoints.down('sm')] : {
            height: 'calc(100vw - 56px)',
            width: '100vw'
        },
        [theme.breakpoints.down('xs')] : {
            height: 'calc(100vw - 50px)',
            width: '100vw'
        },
        backgroundColor: theme.palette.common.backgroundgrey
    },
    bodyDark:{
        [theme.breakpoints.up('md')] : {
            height: 'calc(100vh - 66px)',
            width: '100vw'
        },
        [theme.breakpoints.down('sm')] : {
            height: 'calc(100vw - 56px)',
            width: '100vw'
        },
        [theme.breakpoints.down('xs')] : {
            height: 'calc(100vw - 50px)',
            width: '100vw'
        },
        backgroundColor: theme.palette.common.darkgrey
    }
});
export default styles;