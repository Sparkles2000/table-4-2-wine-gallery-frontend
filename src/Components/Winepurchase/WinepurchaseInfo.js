import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import '../Styles/All.css';

function WinepurcaseInfo() {
    const [winepurcase, setWinepurcase] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'winepurcases/' + id)
        .then((res) => res.json())
        .then((json) => setWinepurcase(json));
    }, [id]);
  
    useEffect(() => {
        console.log(winepurcase);
    }, [winepurcase]);
    
    return (
      <div>
          {winepurcase && (
          <>
          <p> {winepurcase.purchasepackage}, {winepurcase.purchased}</p>  
          </>
      )}
      </div>
      
      );
  
  }
  export default WinepurcaseInfo;