import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Brandofwine from './Brandofwine';
import BrandofwineForm from './BrandofwineForm';

function BrandofwineContainer() {
    const [brandofwines, setBrandofwines] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "brandofwines")
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

    function populateBrandofwines() {
        console.log(brandofwines);
        return brandofwines.map((brandofwine, idx) => (
            <Brandofwine brandofwine={brandofwine} updateBrandofwine={updateBrandofwine} deleteBrandofwine={deleteBrandofwine} key={brandofwine.id} />
        ));
    }

    function createBrandofwine(brandofwine) {
        fetch(BASE_URL + "brandofwines", {
          method: "POST",
          body: JSON.stringify(brandofwine),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => setBrandofwines([...brandofwines, json]));
    }

          function updateBrandofwine(brandofwine) {
            fetch(BASE_URL + "brandofwines/" + brandofwine.id, {
                method: "PUT",
                body: JSON.stringify(brandofwine),
                headers: {
               "Accept": "applicaton/json",
               "Content-Type": "application/json",
               },
            });
        
            const newBrandofwines = brandofwines.map ((b) => {
                if (b.id === brandofwine.id) {
                    b = brandofwine;
                }
                
    return b;
    });
    setBrandofwines(newBrandofwines);
    }

    function deleteBrandofwine(brandofwine) {
        fetch(BASE_URL + "brandofwines/" + brandofwine.id, {
          method: "DELETE",
        });
        const newBrandofwines = brandofwines.filter((b) =>b.id !== brandofwine.id);
    setBrandofwines(newBrandofwines);
    }
    
        return (
            <div className="all-container">
            <h2 className="all-header">Brand Of Wines</h2>
            <h2>Add A New Brand Of Wine</h2>
            <p>Enjoy Our Huge Selection Of Popular Wines!</p>
            <div className="brandofwineForm">
            <BrandofwineForm createBrandofwine={createBrandofwine} />
            </div>
            <div className="brandofwine-container">{brandofwines && populateBrandofwines()}</div>     
        </div>
    );
}
    
export default BrandofwineContainer;