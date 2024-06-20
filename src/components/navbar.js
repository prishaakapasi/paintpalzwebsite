import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)


  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
       {button && <Button buttonStyle='btn--outline'>MONKEY</Button>}
      </div>
    </nav>
  );
}

export default Navbar;