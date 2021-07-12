import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios'


class CreateClubs extends Component {

    state = {
        name: ""    ,
        Allimages: '',
        contactPerson: "",
        contactNumber: "",
        email: "",
        members: "",
        address: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }


    fileHandler = (e) => {
        this.setState({
          Allimages: e.target.files[0]
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createClub = (e) => {
        e.preventDefault(); //prevents from reloading page
        const data = new FormData()
        data.append("name", this.state.name)
        data.append("Allimages", this.state.Allimages)
        data.append("contactPerson", this.state.contactPerson)
        data.append("contactNumber", this.state.contactNumber)
        data.append("email", this.state.email)
        data.append("members", this.state.members)
        data.append("address", this.state.address)

        // prevents from reloading page
        axios.post("http://localhost:5000/activity/insert", data)
            .then(
                (response) => {
                    console.log(response)
                    alert(response.data.message)
                    window.location.reload()
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }




    render() {
    {

        if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
            var createpromo =

                <div className="container-fluid">
                        <div className="col" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div className="card">

                                <div className="card-body">
                                    <h2 className="card-title">Club Details</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Club Name</label>
                                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.changeHandler} required />

                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.changeHandler} required />

                                        </div>
                                        <br/>
                                        {/* <div className="form-group">
                                            <label for="img">Image</label>
                                            <input type="file" name="Allimages" className="form-control" onChange={this.fileHandler} accept="image/*"/>

                                        </div> */}
                                        {/* <br/> */}
                                        <div className="form-group">
                                            <label>Contact Person</label>
                                            <input type="text" className="form-control" name="contactPerson" value={this.state.contactPerson} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Contact Number</label>
                                            <input type="text" className="form-control" name="contactNumber" value={this.state.contactNumber} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Total Members</label>
                                            <input type="text" className="form-control" name="members" value={this.state.members} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <button type="submit" onClick={this.createClub} className="btn btn-primary"><FaPlusCircle /> Add Club</button>
                                    </form>



                                </div>
                        </div>

                    </div>
                </div>
        
    }
}
        return (



            <div>
                {createpromo}
            </div>

        )
    }
}
export default CreateClubs


















