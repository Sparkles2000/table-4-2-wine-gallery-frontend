import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function BrandofwineInfo() {
    const [brandofwine, setbrandofwine] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'brandofwines/' + id)
        .then((res) => res.json())
        .then((json) => setbrandofwine(json));
    }, [id]);
  
    useEffect(() => {
        console.log(brandofwine);
    }, [brandofwine]);

        return (
            <div>
            {brandofwine && (
              <>
                <p>Brand Name: {brandofwine.brand}</p>
                <p>Aged Since: {brandofwine.age}</p>
                <p>Wine Type: {brandofwine.winetype}</p>
                <p>Price: {brandofwine.price}</p>
                <p>Dry Or Sweet: {brandofwine.drysweet}</p>
                <p>Alcohol Content: {brandofwine.alcoholcontent}</p>
                <p>Wine Image: {brandofwine.img_url}</p>
                
                <div className="card-container">
            
                </div>
                
              </>
            )}
          </div>
        );
      
      }
      export default BrandofwineInfo;