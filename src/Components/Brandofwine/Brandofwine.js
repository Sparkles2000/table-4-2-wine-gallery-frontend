import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Brandofwine({brandofwine, updateBrandofwine, deleteBrandofwine, initialDelay=0}) {


    const [newBrandofwine, setNewBrandofwine] = useState({...brandofwine});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

      

    function handleChange(e) {
        const updatedValue = {...newBrandofwine}
        updatedValue[e.target.name] = e.target.value;
        setNewBrandofwine({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

    function handleUpdate(e) {
       e.preventDefault();
       updateBrandofwine(newBrandofwine);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    

return(
  <div className="branofwine-container">
    <div className="brandofwine-card">
    <Link to={`/brandofwines/${brandofwine.id}`}>
        <p>Brand Name: {brandofwine.brand}</p>
      </Link>
      <p>Aged Since: {brandofwine.age} wine Type: {brandofwine.winetype} Price:  {brandofwine.price} Dry or Sweet: {brandofwine.drysweet} Alcohol Content: {brandofwine.drysweet}</p>
      <img src={brandofwine.img_src} alt={`${brandofwine.img_src}`} width="90%"/>
      {editMode && (
        <>
          <button onClick={() => deleteBrandofwine(brandofwine)}>Delete</button>

          <form onSubmit={handleUpdate}>
            <input name="brand" value={newBrandofwine.brand} onChange={handleChange} />
            <input name="age" value={newBrandofwine.winetype} onChange={handleChange} />
            <input name="winetype" value={newBrandofwine.price} onChange={handleChange} />
            <input name="price" value={newBrandofwine.drysweet} onChange={handleChange} />
            <input name="drysweet" value={newBrandofwine.drysweet} onChange={handleChange} />
            <input name="alcoholcontent" value={newBrandofwine.alcoholcontent} onChange={handleChange} />
            <input name="image" value={newBrandofwine.img_src} onChange={handleChange} />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
    </div>
  );

}
export default Brandofwine;