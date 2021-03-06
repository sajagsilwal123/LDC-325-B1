
import Navigation from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import OurTeam from './components/AboutUs/OurTeam/OurTeam';
import DeveloperTeam from './components/AboutUs/DeveloperTeam/DeveloperTeam'
import ClubDetails from './components/AboutUs/ClubDetails/ClubDetails';
import PastLeaders from './components/AboutUs/PastLeaders/PastLeaders';
import DistrictDirectory from './components/Resources/DistrictDirectory';
import InternationalForms from './components/Resources/InternationalForms';
import ImportantDates from './components/Resources/ImportantDates';
import LeoManual from './components/Resources/LeoManual';
import FlagSalutation from './components/Resources/FlagSalutation';
import MoreResources from './components/Resources/MoreResources';
import Enewsletter from "./components/Resources/eNewsletter";
import DonateNow from "./components/DonateNow/DonateNow";
import Events from './components/Events/Events'
import EventSingle from "./components/Events/EventsSingle";
import DonationFailure from './components/DonateNow/pages/failure';
import DonationSuccess from './components/DonateNow/pages/success';
import AboutLDC from "./components/AboutUs/AboutDistrict/AboutLDC";
import Admin from './admin/admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from 'reactstrap';
import Home from "./components/Home";
import Login from "./components/pages/login";
import CreateEvents from "./components/CreateEvent/createevent";
import Ourteam from "./components/OurTeam/ourteam";
import ClubDetail from "./components/ClubDetails/clubdetails";
// import ClubSingle from "./components/AboutUs/ClubDetails/ClubSingle";
require('dotenv').config();
function App() {
  return (
    <div className="App">
        <Router>
        <Navigation />          
          <Switch>
            <Route path='/' exact component={Home} />
            <Container>
            <Route path='/OurTeam' component={OurTeam} />
            <Route path='/ClubDetails' component={ClubDetails} />
            <Route path='/PastLeaders' component={PastLeaders} />
            <Route path='/DistrictDirectory' component={DistrictDirectory} />
            <Route path= '/InternationalForms' component={InternationalForms} />
            <Route path='/FlagSalutation' component={FlagSalutation} />
            <Route path='/MoreResources' component={MoreResources} />
            <Route path= '/ImportantDates' component={ImportantDates} />
            <Route path= '/DeveloperTeam' component={DeveloperTeam} />
            <Route path='/LeoManual' component={LeoManual} />
            <Route path='/enewsletter' component={Enewsletter} />
            <Route path='/DonateNow' component={DonateNow} />
            <Route path='/DonationFailure' component={DonationFailure} />
            <Route path='/DonationSuccess' component={DonationSuccess} />
            <Route path='/Events' component={Events} />
            <Route path='/AboutLeo' component={AboutLDC} />
            <Route path='/event/single/:_id' component={EventSingle} />
            {/* <Route path='/card/single/:_id' component={ClubSingle} /> */}
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin} />
            <Route path='/admin/ourteams' component={Ourteam} />
            <Route path='/admin/createevent' component={CreateEvents} />
            <Route exact path='/admin/club' component={ClubDetail} />
            </Container>
          </Switch>
          <Footer />

        </Router>
    </div>
  );
}

export default App;
