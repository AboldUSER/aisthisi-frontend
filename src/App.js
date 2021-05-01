import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Fragment} from 'react'; 
import ScrollToTop from './hooks/ScrollToTop';
import Header from './components/header';
import HomePage from './pages/homepage';
import ArtistsPage from './pages/artistspage';
import Footer from './components/footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'rgb(255,255,255)',
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,247,249,1) 35%, rgba(237,239,243,1) 100%)',
          margin: 0,
  /* background-color: #E6E9EF; */
  fontFamily: 'Titillium Web'
        },
      },
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <Router>
        <Header />
        <Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/artists'>
            <ArtistsPage />
          </Route>
        </Switch>
        </Fragment>
        <Footer />
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
