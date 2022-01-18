import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/All.css';

function Artsession({artsession, updateArtsession, initialDelay=0}) {


    const [newArtsession, setNewArtsession] = useState({...artsession});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newArtsession}
        updatedValue[e.target.name] = e.target.value;
        setNewArtsession({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

    function handleUpdate(e) {
       e.preventDefault();
       updateArtsession(newArtsession);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="all-container">
    <div className="all-card">  
    <Link to={`/artsessions/${artsession.id}`}>
        <>Artsession Details: {artsession.artstyle}</>
      </Link>
      <p>Price: {artsession.price},<br />
       Session Type: {artsession.sessiontype},<br />
       Pieces Painted: {artsession.piecespergroup}</p>
        <br />
      {editMode && (
        <>
          <form onSubmit={handleUpdate}>
            <input name="artstyle" value={newArtsession.artstyle} onChange={handleChange} />
            <input name="price" value={newArtsession.price} onChange={handleChange} />
            <input name="sessiontype" value={newArtsession.sessiontype} onChange={handleChange} />
            <input name="piecespergroup" value={newArtsession.piecespergroup} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );

}

export default Artsession;