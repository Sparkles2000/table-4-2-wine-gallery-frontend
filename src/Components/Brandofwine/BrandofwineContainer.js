import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
// import Brandofwine from './Brandofwine';
// import BrandofwineForm from './BrandofwineForm';

function BrandofwineContainer() {
    const [Brandofwines, setBrandofwines] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "Brandofwines")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch the brand of wine');
          }
          return res.json();
        })
      .then(json => {
          setBrandofwines(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, []);
}

export default BrandofwineContainer;