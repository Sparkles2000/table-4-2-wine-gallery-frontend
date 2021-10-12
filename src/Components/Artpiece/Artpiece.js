import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Artpiece({artpiece, updateArtpiece, deleteArtpiece, initialDelay=0}) {


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
  <div className="artpiece-container">
    <div className="artpiece-card">  
    <Link to={`/artpieces/${artpiece.id}`}>
        <p>Artists Names: {artpiece.artists}</p>
      </Link>
      <p>Piece Title:  {artpiece.piece}, Artstyle: {artpiece.artstyle}</p>
      <img src={artpiece.img_src} alt={`${artpiece.img_src}`} width="90%"/>
      {editMode && (
        <>
          <button onClick={() => deleteArtpiece(artpiece)}>Delete</button>

          <form onSubmit={handleUpdate}>
            <input name="Artists" value={newArtpiece.artists} onChange={handleChange} />
            <input name="Piece" value={newArtpiece.piece} onChange={handleChange} />
            <input name="Artstyle" value={newArtpiece.artstyle} onChange={handleChange} />
            <input name="Image" value={newArtpiece.img_src} onChange={handleChange} />
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