import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios'


class CreateEvents extends Component {

    state = {

      eventName: "",
        eventFee:"",
        eventImage: '',
        eventDescription: "",

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    


    }


    fileHandler = (e) => {
        this.setState({
          eventImage: e.target.files[0]
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createEvent = (e) => {
        e.preventDefault(); //prevents from reloading page
        const data = new FormData()
        data.append("eventName", this.state.eventName)
        data.append("eventFee", this.state.eventFee)
        data.append("eventImage", this.state.eventImage)
        data.append("eventDescription", this.state.eventDescription)


        // prevents from reloading page
        axios.post("http://localhost:5000/event/create", data)
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
                                    <h2 className="card-title">Please fill details here</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" name="eventName" value={this.state.eventName} onChange={this.changeHandler} required />

                                        </div>

                                        <div className="form-group">
                                            <label>Fee</label>
                                            <input type="number" className="form-control" name="eventFee" value={this.state.eventFee} onChange={this.changeHandler} required />

                                        </div>


                                        <div className="form-group">
                                            <label for="img">Image</label>
                                            <input type="file" name="eventImage" className="form-control" onChange={this.fileHandler} accept="image/*" required />

                                        </div>

                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" name="eventDescription" value={this.state.eventDescription} onChange={this.changeHandler} required />

                                        </div>

                                        <button type="submit" onClick={this.createEvent} className="btn btn-primary"><FaPlusCircle /> Add Event</button>
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
export default CreateEvents


















