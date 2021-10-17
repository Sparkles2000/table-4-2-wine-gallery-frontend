import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import ArtpieceForm from "../Artpiece/ArtpieceForm";
import '../Styles/All.css';

function ArtsessionInfo() {
    const [artsession, setArtsession] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'artsessions/' + id)
        .then((res) => res.json())
        .then((json) => setArtsession(json));
    }, [id]);

    useEffect(() => {
      console.log(artsession);
  }, [artsession]);

    function createArtpiece(artpieceInfo) {
        const newArtpiece = {
          ...artpieceInfo,
          artsession_id: id,
        };

    fetch(BASE_URL + `artsessions/${id}/artpiece`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArtpiece),
      })
        .then((res) => res.json())
        .then((json) => {
          const newArtsession = { ...artsession, artpiece: [...artsession.artpiece, json] };
          setArtsession(newArtsession);
        });
    }

    return (
      <div>
          {artsession && (
          <>
          <p>Art Session: {artsession.artstyle} {artsession.price}, {artsession.sessiontype}, {artsession.piecespergroup}</p>
          <h3>Add New Art Piece</h3>
            <ArtpieceForm createArtpiece={createArtpiece} /> 
          </>
      )}
      </div>
      
      );
    }
  export default ArtsessionInfo;