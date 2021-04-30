import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Fragment} from 'react'; 
import ScrollToTop from './hooks/ScrollToTop';
import Header from './components/header';
import HomePage from './pages/homepage';
import ArtistsPage from './pages/artistspage';
import Footer from './components/footer';

function App() {
  return (
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
  );
}

export default App;
