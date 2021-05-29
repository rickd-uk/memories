import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  noSelect: {
    msUserSelect: 'none',
    mozUserSelect: 'none',
    webkitUserSelect: 'none',
    webkitTouchCallout: 'none',
    khtmlUserSelect: 'none',
    userSelect: 'none',
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    webkitUserSelect: 'none',
    webkitTouchCallout: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column',
    },
  },
}))
