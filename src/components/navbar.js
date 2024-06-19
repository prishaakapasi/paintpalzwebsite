import React, {useState} from 'react';
import { Link} from 'react-router-dom';
function navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbarcontainer">
                <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"> </i> 
                </Link>
                <div> 
                    </div> 
             </div>
        </nav>

    </>
  )
}

export default navbar