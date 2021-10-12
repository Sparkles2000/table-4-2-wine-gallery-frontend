import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
// import Artpiece from './Artpiece';
// import ArtpieceForm from './ArtpieceForm';

function ArtpieceContainer() {
    const [Artpieces, setArtpieces] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "Artpieces")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch Artpiece');
          }
          return res.json();
        })
      .then(json => {
          setArtpieces(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, []);
  export default CustomergroupContainer;