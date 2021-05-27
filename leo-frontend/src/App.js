import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OurTeam from './components/pages/OurTeam';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';
import Resources from './components/pages/Resources';
import AboutUs from './components/pages/AboutUs';
import ClubDetails from './components/pages/ClubDetails'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/OurTeam' component={OurTeam} />
          <Route path='/Gallery' component={Gallery} />
          <Route path= '/Resources' component={Resources} />
          <Route path= '/AboutUs' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/ClubDetails' component={ClubDetails} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
