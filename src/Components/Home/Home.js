import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/All.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="all-heading">Table 4 2 Wine Gallery Online Menu And Venue</h1><br />
      <Link className="all-link" to="/About">Show Me More!</Link> 
    </div>
  )
}

export default Home;