import React from 'react';
import '../../App.css';
import {Redirect} from 'react-router-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        checkLogin: false,
        

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    loginUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        axios.post("http://localhost:5000/user/login",  this.state)
            .then(
                (response) => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userType', response.data.userType) 
                    localStorage.setItem('fullname', response.data.fullname)
                    localStorage.setItem('id', response.data.id)
                    // localStorage.setItem('data', JSON.stringify(response.data.userData))

                    if (localStorage.getItem('token') === "undefined") {
                        this.setState({ checkLogin: false })
                        alert(response.data.message)
                    }

                    else {

                        this.setState({ checkLogin: true })
                    }
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }

    render() {
        if (this.state.checkLogin === true) {
            return window.location.href = "/dashboard"

        }

        return (

            
                <div className="container mb-3">
                    <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
    
                        <div className="no gutters ">
                           
                        <h1 className="font-weight-bold py-4">Login</h1>
                        <h5>Sign in to your acccount</h5>


                                    <form className="mb-2">
                                        <div className="form-row">
                                      
                                            <label htmlFor="uname">Email:</label>
                                            <input type="text" className="form-control" value={this.state.email} onChange={this.changeHandler} name="email" required />
                                        
                                        </div>
                                    
                                        <div className="form-row">
                                        
                                            <label htmlFor="pwd">Password:</label>
                                            <input type="password" className="form-control" value={this.state.password} onChange={this.changeHandler} name="password" required />
                                    
                                        </div>


                                        <p className="signUp text-left">Do have an Account?  <Link exact to="/register"><b>Sign Up</b></Link></p>
                                        <div className="form-row">
                                    
                                        <button type="submit" onClick={this.loginUser} className="btn btn-primary"> Sign in </button>
                                       
                                        </div>
                                    </form>



                                </div>

                            </div>
                            <div>
                                
                            </div>

                        </div>
                

              

     



        )
    }
}
export default Login;

