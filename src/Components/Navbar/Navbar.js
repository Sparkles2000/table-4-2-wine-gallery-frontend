import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/customergroups">Customer Group History</Link>
                <Link to="/brandofwines">Wine Menu</Link>
                {/* <Link to="/artpieces">Walk The Art</Link><br/>
                <Link to="/winepurchases">Past Wine Purchase Packages</Link><br/>  */}
                  
            </div>
        </nav>
        </div>
    );
}

export default Navbar;