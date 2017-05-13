import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header role='banner' className='header'>
        <h1 className='title'>Food<span className="title-highlight">4</span>All</h1>
        <nav role='navigation' className='top-nav'>
          <a className='top-nav-link active-link' href='' title='Home'>Home</a>
          <a className='top-nav-link' href='' title='About'>About</a>
          <a className='top-nav-link' href='' title='Contact'>Contact</a>
        </nav>
        <nav className='top-nav-mobile'></nav>
      </header>
    )
  }
}

export default NavBar
