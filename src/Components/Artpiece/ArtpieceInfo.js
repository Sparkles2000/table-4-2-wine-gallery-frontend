import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function ArtpieceInfo() {
    const [artpiece, setArtpiece] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'artpieces/id')
        .then((res) => res.json())
        .then((json) => setArtpiece(json));
    }, [id]);
  
    useEffect(() => {
        console.log(artpiece);
    }, [artpiece]);
    
    return (
      <div>
          {artpiece && (
          <>
          <p> {artpiece.artists}, {artpiece.piece}, {artpiece.artstyle}, {artpiece.img_src}</p>  
          </>
      )}
      </div>
      
      );
  
  }
  export default ArtpieceInfo;