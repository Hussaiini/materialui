
import { makeStyles, ThemeProvider,CssBaseline, createTheme, } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import SideMenue from './components/SideMenue';

import Users from './components/Pages/Users/Users';

const theme = createTheme({
  palette: {
    primary: {
      main: '#253053',
      light: '#3c44b126',
    },
    background: {
      default: '#f4f5fd',
    },
    shape: {
      borderRadius: '12px',
    },
  },
});
const useStyles=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
  }
})
function App() {
  const classes=useStyles();
  return (
    
    <ThemeProvider theme={theme}>
    <SideMenue/>
    <div className={classes.appMain}>
      <Header />
 
      <Users/>
    </div>
    <CssBaseline/>
    </ThemeProvider>
  
  );
}

export default App;
