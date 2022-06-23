import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <div className="left">
              <Link to="/" className='navbarLink'>Home</Link>
              <Link to="/whyUs" className='navbarLink'>Products</Link>
              <Link to="/" className='navbarLink'>About Us</Link>
            </div>
            <div className="center">
              <div className="navbarLogo">
                  <Link to='/'>
                      <img className="navbarImage" src="https://catalog.wlimg.com/1/6531785/other-images/12569-comp-image.png" alt="logo" />
                  </Link>
              </div>
            </div>
            <div className="right">
                <Link to="/" className='navbarLink'>Online Payment</Link>
                <Link to="/whyUs" className='navbarLink'>Why Us? </Link>
                <Link to="/" className='navbarLink'>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar