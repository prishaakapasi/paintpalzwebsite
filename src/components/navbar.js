import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);
  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TRVL <i className="fab fa-typo3"></i>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'> 
            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
            Home
            </Link>
          </li>
          <li className='nav-item'> 
            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
            Services
            </Link>
          </li>
          <li className='nav-item'> 
            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
            About
            </Link>
          </li>
          <li className='nav-item'> 
            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}> 
            Sign Up 
            </Link>
          </li>
       </ul>
      </div>
    </nav>
  );
}

export default Navbar;