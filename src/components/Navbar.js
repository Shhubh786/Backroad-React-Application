import React from 'react'

import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
// import { fab, } from '@awesome.me/kit-KIT_CODE/icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Navbar = () => {
  return (
    // <div className='navbar1'>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
     
        <ul className="nav-links" id="nav-links">
        {pageLinks.map((link)=>{
          return(
               <li key={link.id}>
            <a href={link.href} className="nav-link" > {link.text} </a>
          </li>
          )
        })}
          
        </ul>

        <ul className="nav-icons">
        {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="nav-icon">
              <FontAwesomeIcon icon={icon} /> 
            </a>
            
          </li>
        );
      })}
         
         
        </ul>
      </div>
    </nav>
    // {/* </div> */}
  )
}

export default Navbar
