import React from 'react';
import NavigationBar from './components/NavBar/Navbar'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OurTeam from './components/pages/About Us/OurTeam';
import ClubDetails from './components/pages/About Us/ClubDetails';
import PastLeaders from './components/pages/About Us/PastLeaders';
import SignUp from './components/pages/SignUp';
import DistrictDirectory from './components/pages/Resources/DistrictDirectory';
import InternationalForms from './components/pages/Resources/InternationalForms';
import ImportantDates from './components/pages/Resources/ImportantDates';
import LeoPledge from './components/pages/Resources/LeoPledge';
import FlagSalutation from './components/pages/Resources/FlagSalutation';
import MoreResources from './components/pages/Resources/MoreResources';


function App() {
  return (
    <>
      <Router>
        
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/OurTeam' component={OurTeam} />
          <Route path='/ClubDetails' component={ClubDetails} />
          <Route path='/PastLeaders' component={PastLeaders} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/DistrictDirectory' component={DistrictDirectory} />
          <Route path= '/InternationalForms' component={InternationalForms} />
          <Route path='/FlagSalutation' component={FlagSalutation} />
          <Route path='/MoreResources' component={MoreResources} />
          <Route path= '/ImportantDates' component={ImportantDates} />
          <Route path='/LeoPledge' component={LeoPledge} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
