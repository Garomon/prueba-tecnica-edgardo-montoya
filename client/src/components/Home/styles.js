import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    marginRight: '1rem;'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  container: {
    display: 'flex',
    gap: '3rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  }
}));
