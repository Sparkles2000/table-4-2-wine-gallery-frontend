import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import WinepurchaseForm from "../Winepurchase/WinepurchaseForm";

function BrandofwineInfo() {
    const [brandofwine, setBrandofwine] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'brandofwines/' + id)
        .then((res) => res.json())
        .then((json) => setBrandofwine(json));
    }, [id]);

    function createWinepurchase(winepurchaseInfo) {
      const newWinepurchase = {
        ...winepurchaseInfo,
        brandofwine_id: id,
      };
  
    fetch(BASE_URL + `brandofwines/${id}/winepurchase`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWinepurchase),
    })
      .then((res) => res.json())
      .then((json) => {
        const newBrandofwine = { ...brandofwine, winepurchase: [...brandofwine.winepurchases, json] };
        setBrandofwine(newBrandofwine);
      });
  }

useEffect(() => {
  console.log(brandofwine);
}, [brandofwine]);

        return (
            <div className="all-card">
            {brandofwine && (
              <>
                <p>Brand Name: {brandofwine.brand}, Aged Since: {brandofwine.age}, Wine Type: {brandofwine.winetype}, Price: {brandofwine.price}, Dry Or Sweet: {brandofwine.drysweet}, Alcohol Content: {brandofwine.alcoholcontent} <img className="brandofwine-info-image" src={brandofwine.img_src} alt={`${brandofwine.img_src}`} width="90%"/></p>
                <h3>Add New Wine Purchase</h3>
                <WinepurchaseForm createWinepurchase={createWinepurchase} />
              </>
            )}
          </div>
        );
      
      }
      export default BrandofwineInfo;