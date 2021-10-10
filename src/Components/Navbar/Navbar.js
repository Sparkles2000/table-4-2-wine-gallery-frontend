import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link><br/>
                <Link to="/About">About</Link><br/>
                <Link to="/customergroups">Past Customer Group Visits</Link><br/>
                {/* <Link to="/brandofwines">Wine Menu</Link><br/>
                <Link to="/artsessions">Past Art Session Purchases</Link><br/>
                <Link to="/artpieces">Walk The Art</Link><br/>
                <Link to="/winepurchases">Past Wine Purchase Packages</Link><br/>  */}
                  
            </div>
        </nav>
        </div>
    );
}

export default Navbar;