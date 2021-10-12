import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
// import artsession from './artsession';
// import artsessionForm from './artsessionForm';

function artsessionContainer() {
    const [artsessions, setArtsessions] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "artsessions")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch Art Session');
          }
          return res.json();
        })
      .then(json => {
          setArtsessions(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, []);

  export default ArtsessionContainer;