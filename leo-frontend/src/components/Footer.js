import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="bg-dark text-center text-white">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
         
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-center text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
          <h5 className="text-center text-uppercase mb-4 mt-3 font-weight-bold">
            <ul className="list-unstyled">
            
              Developer Team
              
              </ul>
            </h5>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        <br>
        </br>
        <br>
        </br>
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href={"https://www.facebook.com/leo325b1"} className="btn-floating btn-sm btn-tw mx-1"  target="_blank">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-youtube"> </i>
            </a>
          </li>

        </ul>
      </div>
      <div className="footer-copyright text-center py-3" >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/" > Leo District Council 325 B1 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;