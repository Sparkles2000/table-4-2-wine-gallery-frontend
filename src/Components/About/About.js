import React from 'react';
import { Link } from 'react-router-dom';
// import "./About.css";

function About() {
  return (
    <div className="About-container">
      <h1 className="About-heading">Table 4 2 Wine Gallery Online Menu And Venue</h1>
      <h2>This is a Wine Gallery online Menue And Venue meant for online orders of wine and displaying of artworks created from art sessions in the Wine Gallery.
      It is mainly meant for Couples to share a romantic art and wine session with each other although you can also go alone or just with friends.
      It is a good experience for all.</h2>
      <h3>Customer Memberships</h3>
      <p>VIP Diamond Elite<br/>
        VIP Diamond<br/>
        Preffered<br/>
        General(Normal admission)</p>
      <h3>Wine Session Purchase Packages</h3>
      <p>VIP Diamond Elite Premium<br/>
Any session, Krug plus two other wines, three hors d'oeuvres.<br/>
VIP Diamond Premium <br/>
Any session, Krug one other wine, two hors d'oeuvres.<br/>
Preferred Premium<br/>
Any session three wines $20 and below, three hors d'oeuvres.<br/>
Preferred Basic<br/>
Any session, two wines $20 and below, two hors d'oeuvres.<br/>
Five High Premium<br/>
Five High Session, four wines $15 and below, three hors d'oeuvres.<br/>
Five High Basic<br/>
Five High Session, three wines $10 and below, two hors d'oeuvres.<br/>
Double Duo Premium<br/>
Double Duo Session, three wines $15 and below, three hors d'oeuvres.<br/>
Double Duo Basic<br/>
Double Duo Session, two wines $10 and below, two hors d'oeuvres.<br/>
Double Team Premium<br/>
Double Team Session, three wines $15 and below, three hors d'oeuvres.<br/>
Double Team Basic<br/>
Double Team Session, two wines $10 and below, two hors d'oeuvres.<br/>
Triple Tribe Premium<br/>
Triple Tribe Session, three wines $15 and below, three hors d'oeuvres.<br/>
Triple Tribe Basic<br/>
Triple Tribe Session, two wines $10 and below, two hors d'oeuvres.<br/>
Lover's Duo Premium<br/>
Lover's Duo Session, two wines $15 and below, two hors d'oeuvres.<br/>
Lover's Duo Basic<br/>
Lover's Duo Session, one wine $10 and below, one hors d'oeuvre.<br/>
Together As One Premium<br/>
Together As One Session, two wines $15 and below, two hors d'oeuvres.<br/>
Together As One Basic<br/>
Together As One Session, one wine $10 and below, one hors d'oeuvre.<br/>
Simply Me Premium<br/>
Simply Me Session, one wine $15 and below, two hors d'oeuvres.<br/>
Simply Me Basic<br/>
Simply Me Session, one wine $10 and below, one hors d'oeuvre.<br/>
Any Session Premium<br/>
Your choice of wine $15 and below and a session. Every session comes with wine.<br/>
Any Session Basic<br/>
Your choice of wine $10 and below and a session. Every session comes with wine.<br/>
Wine<br/>
Any wine. Price will vary according to the brand and type.</p>
      <Link className="about-link" to="/brandofwines">Show Me More!</Link>
    </div>
  )
 }
export default About;