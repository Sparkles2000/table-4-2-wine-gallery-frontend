import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/All.css';

function Winepurchase({winepurchase, updateWinepurchase, initialDelay=0}) {


    const [newWinepurchase, setNewWinepurchase] = useState({...winepurchase});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newWinepurchase}
        updatedValue[e.target.name] = e.target.value;
        setNewWinepurchase({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

    function handleUpdate(e) {
       e.preventDefault();
       updateWinepurchase(newWinepurchase);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="all-container">
    <div className="all-card">  
    <Link to={`/winepurchases/${winepurchase.id}`}>
        <h3>Customer Package Order: {winepurchase.purchasepackage}</h3>
      </Link>
      <p>Purchase includes:  {winepurchase.purchased}</p>
      {editMode && (
        <>

          <form onSubmit={handleUpdate}>
            <input name="Package Purchased" value={newWinepurchase.purchasepackage} onChange={handleChange} />
            <input name="Purchase Includes" value={newWinepurchase.purchased} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );

}

export default Winepurchase;