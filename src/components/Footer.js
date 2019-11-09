import React from 'react';
import logo from '../assets/cat-w.png'

export default ({ isLoggedIn, handleSubmit }) => (
  <footer className='footer'>
    <div className='container'>
      <div className='logo'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div>
        <strong>Lost and Found Pets</strong> &copy; Copyright 2019 
      </div>
      <div className='social-media'>
        <a href='http://twitter.com' target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-twitter-square' aria-hidden='true'></i>
        </a>
        <a href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-facebook-square' aria-hidden='true'></i>
        </a>
        <a href='http://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        </a>
        <a href='http://github.com' target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-github-square' aria-hidden='true'></i>
        </a>
      </div>
    </div>
  </footer>
);
