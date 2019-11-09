import React from 'react';
import logo from '../assets/cat-w.png'

export default ({ isLoggedIn, handleSubmit }) => (
  <header className="fixed-header">
    <div className='container'>
      <div className='logo'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      LFP
      <button className='btn' onClick={handleSubmit} >{ !isLoggedIn ? 'Login' : 'Logout' }</button>
    </div>
  </header>
);
