import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/signup'>Create Account</Link>
      </nav>
    )
  }
}

export default Header
