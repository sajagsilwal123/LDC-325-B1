import React from 'react';
import { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";


// export default function EVENTS() {
//     return <h1 className='event'>Events</h1>;
//   }

class Events extends Component {
    render() {
        {
            if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
                var redirect =


<div>
                 this is admin

                 </div>


            }
            else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Customer') {
                redirect =
                    <div>this is user</div>

            }

        }
        return (
<div>
    <div><img style={{width:"100%",height:"500px"}} src ="/images/bok4.jpg"></img></div>
   
    <h2 class="w3-wide">THE BAND</h2>
    <p class="w3-opacity"><i>We love Comic Books</i></p>
    <p class="w3-justify">We have created a Comic Reader website. Comic Reader is a next-gen comic reader full of stunning features! With an elegant and simple interface, this app allows you to browse and read has never been so easy. organize all your comics in customizable collections, or use the powerful search feature to find what to read. 
      use the intelligent suggestions system to quickly fill your collections with related comics, or jump directly to the next issue when you have finished to read one. Comic Reader is able to generate awesome wallpapers if you're using this app, and have a cast support, so you can read your comics everywhere, on any screen! Discover Snapshots, and 
     share all moments parts you love in our comics add the comics you like to your favourites List, and share the pages which amazed you the most with your friends in a few touches! its that easy to use! Comic Reader is fully compatible.</p>
      <MDBContainer>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Testimonials
        </h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
          Comic Reader is able to provide as you like Comics, able to generate 
          awesome wallpapers and add the comics you like to your favourite list
          and share the pages which amazed you the most with your friends in a few touches!!
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
           
              
                <img
                  
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
           
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Alish Rathode</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                 Comic reader sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
          
              
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  alt=""
                  className="rounded-circle img-fluid" 
                />
        
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Dipti Baral</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Neque cupiditate assumenda in maiores repudiandae mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
           
              
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Sadiksha Pandey</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
    
            </div>
          
        )
    }
}

export default Events;