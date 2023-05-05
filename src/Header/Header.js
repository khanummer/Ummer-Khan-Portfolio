import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="header-title">"UMMER KHAN PORTFOLIO"</div>
        <a><div className='header-button'>ABOUT</div></a>
        <a><div className='header-button'>PROJECTS</div></a>
        <a><div className='header-button'>EDUCATION</div></a>
        <a><div className='header-button'>CONTACT</div></a>

      </div>
    );
  }
}

export default Header;