import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
  },

  activeStyle: {
    borderColor: '#2196f3',
  },

  acceptStyle: {
    borderColor: '#00e676',
  },

  rejectStyle: {
    borderColor: '#ff1744',
  },
}))
