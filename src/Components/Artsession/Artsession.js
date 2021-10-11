import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Artsession({artsession, updateArtsession, deleteArtsession, initialDelay=0}) {


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
  <div className="artsession-container">
    <div className="artsession-card">  
    <Link to={`/artsessions/${artsession.id}`}>
        <p>Artsession Details: {artsession.artstyle}</p>
      </Link>
      <p>Price: {artsession.price}, Session Type: {artsession.sessiontype}, Pieces Painted: {artsession.piecespergroup}</p>
      {editMode && (
        <>
          <button onClick={() => deleteArtsession(artsession)}>Delete</button>

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