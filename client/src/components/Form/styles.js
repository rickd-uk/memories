import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  noSelect: {
    msUserSelect: 'none',
    mozUserSelect: 'none',
    webkitUserSelect: 'none',
    webkitTouchCallout: 'none',
    khtmlUserSelect: 'none',
    userSelect: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '90%',
    margin: '15px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}))
