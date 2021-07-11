import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios'


class CreateClubs extends Component {

    state = {

        topic: "",
        Allimages: '',
        description: "",

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
        data.append("topic", this.state.topic)
        data.append("Allimages", this.state.Allimages)
        data.append("description", this.state.description)


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
                                    <h2 className="card-title">Please fill details here</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Topic</label>
                                            <input type="text" className="form-control" name="topic" value={this.state.eventName} onChange={this.changeHandler} required />

                                        </div>

                                        <div className="form-group">
                                            <label for="img">Image</label>
                                            <input type="file" name="Allimages" className="form-control" onChange={this.fileHandler} accept="image/*" required />

                                        </div>

                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.changeHandler} required />

                                        </div>

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


















