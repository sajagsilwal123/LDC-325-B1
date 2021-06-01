import Navigation from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import OurTeam from './components/Pages/About Us/OurTeam';
import ClubDetails from './components/Pages/About Us/ClubDetails';
import PastLeaders from './components/Pages/About Us/PastLeaders';
import DistrictDirectory from './components/Pages/Resources/DistrictDirectory';
import InternationalForms from './components/Pages/Resources/InternationalForms';
import ImportantDates from './components/Pages/Resources/ImportantDates';
import LeoPledge from './components/Pages/Resources/LeoPledge';
import FlagSalutation from './components/Pages/Resources/FlagSalutation';
import MoreResources from './components/Pages/Resources/MoreResources';

      
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">

        <Router>
        <Navigation />          

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/OurTeam' component={OurTeam} />
            <Route path='/ClubDetails' component={ClubDetails} />
            <Route path='/PastLeaders' component={PastLeaders} />
            <Route path='/DistrictDirectory' component={DistrictDirectory} />
            <Route path= '/InternationalForms' component={InternationalForms} />
            <Route path='/FlagSalutation' component={FlagSalutation} />
            <Route path='/MoreResources' component={MoreResources} />
            <Route path= '/ImportantDates' component={ImportantDates} />
            <Route path='/LeoPledge' component={LeoPledge} />

          </Switch>
          <Footer />

        </Router>
    </div>
  );
}

export default App;
