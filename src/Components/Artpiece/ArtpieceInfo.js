import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Artpiece({Artpiece, updateArtpiece, deleteArtpiece, initialDelay=0}) {


    const [newArtpiece, setNewArtpiece] = useState({...Artpiece});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newArtpiece}
        updatedValue[e.target.name] = e.target.value;
        setNewArtpiece({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

    function handleUpdate(e) {
       e.preventDefault();
       updateArtpiece(newArtpiece);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="Artpiece-container">
    <div className="Artpiece-card">  
    <Link to={`/Artpieces/${Artpiece.id}`}>
        <p>Customer Group Party: {Artpiece.Artists}</p>
      </Link>
      <p>Party Quantity:  {Artpiece.artists}, Artstyle: {Artpiece.artstyle}, Image: {img_url}</p>
      {editMode && (
        <>
          <button onClick={() => deleteArtpiece(Artpiece)}>Delete</button>

          <form onSubmit={handleUpdate}>
            <input name="Artists" value={newArtpiece.artists} onChange={handleChange} />
            <input name="Piece" value={newArtpiece.piece} onChange={handleChange} />
            <input name="Artstyle" value={newArtpiece.artstyle} onChange={handleChange} />
            <input name="Image" value={newArtpiece.img_url} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );

}

export default Artpiece;