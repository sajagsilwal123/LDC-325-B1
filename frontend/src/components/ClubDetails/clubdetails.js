import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios'


class ClubDetail extends Component {

    state = {

      image: "",
        title:"",
        details: '',

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    


    }


    fileHandler = (e) => {
        this.setState({
          image: e.target.files[0]
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Clubdetails = (e) => {
        e.preventDefault(); //prevents from reloading page
        const data = new FormData()
        data.append("image", this.state.image)
        data.append("title", this.state.title)
        data.append("details", this.state.details)
    


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
            var clubdetails =

                <div className="container-fluid">
                        <div className="col" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div className="card">

                                <div className="card-body">
                                    <h2 className="card-title">Please fill details here</h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.changeHandler} required />

                                        </div>

                                  


                                        <div className="form-group">
                                            <label for="img">Image</label>
                                            <input type="file" name="image" className="form-control" onChange={this.fileHandler} accept="image/*" required />

                                        </div>

                                        <div className="form-group">
                                            <label>Club Details</label>
                                            <input type="text" className="form-control" name="details" value={this.state.details} onChange={this.changeHandler} required />

                                        </div>

                                        <button type="submit" onClick={this.Clubdetails} className="btn btn-primary"><FaPlusCircle /> Add club Details</button>
                                    </form>



                                </div>

                           
                        </div>

                    </div>
                </div>
        
    }
  }
        return (



            <div>
                {clubdetails}
            </div>

        )
    }
}
export default ClubDetail


















