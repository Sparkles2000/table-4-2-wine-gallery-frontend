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
            <div className="brandofwine-card">
            {brandofwine && (
              <>
                <p>Brand Name: {brandofwine.brand}, Aged Since: {brandofwine.age}, Wine Type: {brandofwine.winetype}, Price: {brandofwine.price}, Dry Or Sweet: {brandofwine.drysweet}, Alcohol Content: {brandofwine.alcoholcontent}</p>
                <img className="brandofwine-info-image" src={brandofwine.img_src} alt={`${brandofwine.img_src}`} width="90%"/>
              </>
            )}
          </div>
        );
      
      }
      export default BrandofwineInfo;