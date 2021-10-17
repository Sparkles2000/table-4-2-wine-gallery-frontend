import React from 'react';
import {useParams} from 'react-router';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Artpiece from './Artpiece';
import ArtpieceForm from './ArtpieceForm';
import '../Styles/All.css';

function ArtpieceContainer() {
    const [artpieces, setArtpieces] = useState([]);
    const { id } = useParams();

useEffect(() => {
    fetch(BASE_URL + `customergroups/${id}/artsessions/${id}/artpieces`)
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch artpiece');
          }
          return res.json();
        })
      .then(json => {
          setArtpieces(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, [id]);
  function populateArtpieces() {
    console.log(artpieces);
    return artpieces.map((artpiece, idx) => (
      <Artpiece artpiece={artpiece} updateArtpiece={updateArtpiece} deleteArtpiece={deleteArtpiece} key={artpiece.id} />
    ));
  }

  function createArtpiece(artpiece) {
    fetch(BASE_URL + `customergroups/${id}/artsessions/${id}/artpieces`, {
      method: "POST",
      body: JSON.stringify(artpiece),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setArtpieces([...artpieces, json]));
  }
       
  function updateArtpiece(artpiece) {
    fetch(BASE_URL + `customergroups/${id}/artsessions/${id}/artpieces/` + artpiece.id, {
        method: "PUT",
        body: JSON.stringify(artpiece),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });

    const newArtpieces = artpieces.map ((p) => {
        if (p.id === artpiece.id) {
            p = artpiece;
        }
        
        return p;
    });
    setArtpieces(newArtpieces);
    }

function deleteArtpiece(artpiece) {
    fetch(BASE_URL + `customergroups/${id}/artsessions/${id}/artpieces` + id, {
      method: "DELETE",
    });
    const newArtpieces = artpieces.filter((p) => p.id !== artpiece.id);
setArtpieces(newArtpieces);
 }

    return (
            <div className="artpiece-container">
            <h2 className="all-header">Walk The Art</h2>
            <h2>Display Your Masterpiece!</h2>  
            <p>See Your Creation In The Walk The Art!</p>
            <div className="allform">
            <ArtpieceForm createArtpiece={createArtpiece} />
            </div>
            <div className="artpiece-container">{artpieces && populateArtpieces()}</div>
          
        </div>
    );
  
}

export default ArtpieceContainer;