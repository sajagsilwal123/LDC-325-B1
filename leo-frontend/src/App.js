import Navigation from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import OurTeam from './components/pages/About Us/OurTeam';
import ClubDetails from './components/pages/About Us/ClubDetails';
import PastLeaders from './components/pages/About Us/PastLeaders';
import DistrictDirectory from './components/pages/Resources/DistrictDirectory';
import InternationalForms from './components/pages/Resources/InternationalForms';
import ImportantDates from './components/pages/Resources/ImportantDates';
import LeoManual from './components/pages/Resources/LeoManual';
import FlagSalutation from './components/pages/Resources/FlagSalutation';
import MoreResources from './components/pages/Resources/MoreResources';

      
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
