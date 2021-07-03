import React from 'react';
import '../../App.css';
import {Redirect} from 'react-router-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from '@sweetalert/with-react';

class Dashboard extends React.Component {
  

    render() {
        
            if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
                var redirect =


                <img src="" alt="nothing"/>

            }

        return (
            

        
            
            <div>
                                    {redirect}
                                </div>



        )
    }
}
export default Dashboard;