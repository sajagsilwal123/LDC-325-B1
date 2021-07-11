import {Component} from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';

class Register extends Component {

    state = {

        fullname: "",
        username:"",
        address: "",
        phone: "",
        email: "",
        password: "",
        userType:"User"

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

 
    Register = (e) => {
        
        e.preventDefault(); // prevents from reloading page

        
        let fullname = this.refs.fullname.value;
        let userType = this.refs.userType.value;
        let email = this.refs.email.value;
        let address = this.refs.address.value;
        let phone = this.refs.phone.value;
        let password = this.refs.password.value;

        axios.post("http://localhost:5000/user/registration", this.state)
            .then(
                (response) => {
                    console.log(response)
                    swal(
                        <div>
                          <h1>Sucess</h1>        
                          <p>Register Success</p>
                        </div>
                      ).then((v)=>{
                        window.location.href = "http://localhost:3000/Login";
                      })
                   
                    
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }


    render() {
        return (
           
                <div className="container-fluid" style={{marginTop:'20px', marginBottom:'20px'}}>
                    <div className="row">
                      

                        </div>
                      
                            <div className="card">

                                <div className="card-body">
                                    <h2 className="card-title">Registration Form</h2>

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="fullname">Fullname</label>
                                            <input type="text" className="form-control" name="fullname" ref = "fullname" value={this.state.fullname} onChange={this.changeHandler} required />

                                        </div>

                                    <div className="form-group">
                                            <label htmlFor="username">User Type</label>
                                           
                                         <select id="inputState" class="form-control" name="userType" ref = "userType" onChange={this.changeHandler} value={this.state.value}>
                                         <option selected>User</option>
                                          <option>Admin</option>
                                            </select>
                                           
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <input type="address" className="form-control" name="address" ref = "address" value={this.state.address} onChange={this.changeHandler} required />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" className="form-control" name="email" ref = "email" value={this.state.email} onChange={this.changeHandler} required />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone:</label>
                                            <input type="phone" className="form-control" name="phone" ref = "phone" value={this.state.phone} onChange={this.changeHandler} required />

                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="passwprd">Password</label>
                                            <input type="password" className="form-control" name="password" ref = "password" value={this.state.password} onChange={this.changeHandler} required />

                                        </div>



                                        <p className="signUp text-left">Go to  <Link exact to="/login"><b>Sign in</b></Link></p>
                                        <button type="submit" onClick={this.Register} className="btn btn-warning"> Sign up </button>
                                    </form>



                                </div>

                            </div>
                        </div>
                    





        )
    }
}
export default Register


















