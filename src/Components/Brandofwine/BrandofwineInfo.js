import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import '../Styles/All.css';

function BrandofwineInfo() {
    const [brandofwine, setBrandofwine] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'brandofwines/' + id)
        .then((res) => res.json())
        .then((json) => setBrandofwine(json));
    }, [id]);


useEffect(() => {
  console.log(brandofwine);
}, [brandofwine]);

        return (
            <div className="all-card">
            {brandofwine && (
              <>
                <h3>{brandofwine.brand}</h3>
                <p> Aged Since: {brandofwine.age}
                <br /> Wine Type: {brandofwine.winetype}
                <br /> Price: {brandofwine.price}
                <br /> Dry Or Sweet: {brandofwine.drysweet}
                <br /> Alcohol Content: {brandofwine.alcoholcontent}
                <br /> <img className="brandofwine-info-image" src={brandofwine.img_src} alt={`${brandofwine.img_src}`} width="60%"/></p>
              </>
            )}
          </div>
        );
      
      }
      export default BrandofwineInfo;