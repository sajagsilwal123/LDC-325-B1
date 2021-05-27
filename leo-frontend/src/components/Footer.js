import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Dummy Dummy Dummy Dummy
        </p>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href={"https://www.facebook.com/leo325b1"}>Facebook</a>
            <a href={"https://www.facebook.com/leo325b1"}>Instagram</a>
            <a href={"https://www.facebook.com/leo325b1"}>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>

          </div>
          <small class='website-rights'>Leo District Council 325 B1 © 2021</small>
          <div class='social-icons'>
            <a class='social-icon-link facebook' href={""}>
              <i class='fab fa-facebook-f' />
            </a>

            <a class='social-icon-link instagram' href={""}>
              <i class='fab fa-instagram' />
            </a>

            <a class='social-icon-link youtube' href={""}>
              <i class='fab fa-youtube' />
            </a>

            <a class='social-icon-link twitter' href={""}>
              <i class='fab fa-twitter' />
            </a>


           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
