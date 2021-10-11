import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

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
    
    return (
      <div>
          {artsession && (
          <>
          <p> {artsession.artstyle}, {artsession.price}, {artsession.sessiontype}, {artsession.piecespergroup}</p>  
          </>
      )}
      </div>
      
      );
  
  }
  export default ArtsessionInfo;