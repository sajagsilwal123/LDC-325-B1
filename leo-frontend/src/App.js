import Navigation from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import OurTeam from './components/AboutUs/OurTeam/OurTeam';
import ClubDetails from './components/AboutUs/ClubDetails/ClubDetails';
import PastLeaders from './components/AboutUs/PastLeaders/PastLeaders';
import DistrictDirectory from './components/Resources/DistrictDirectory';
import InternationalForms from './components/Resources/InternationalForms';
import ImportantDates from './components/Resources/ImportantDates';
import LeoManual from './components/Resources/LeoManual';
import FlagSalutation from './components/Resources/FlagSalutation';
import MoreResources from './components/Resources/MoreResources';

      
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
            <Route path='/LeoManual' component={LeoManual} />

          </Switch>
          <Footer />

        </Router>
    </div>
  );
}

export default App;
