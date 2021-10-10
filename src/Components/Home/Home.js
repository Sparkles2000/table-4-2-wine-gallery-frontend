import React from 'react';
import { Link } from 'react-router-dom';
// import "./Home.css";

function Home() {
  return (
    <div className="Home-container">
      <h1 className="Home-heading">Table 4 2 Wine Gallery Online Menu And Venue</h1>
      <Link className="Home-link" to="/About">Show Me More!</Link> 
    </div>
  )
}

export default Home;