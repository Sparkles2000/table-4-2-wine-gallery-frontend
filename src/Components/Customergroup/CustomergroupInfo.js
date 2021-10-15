import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import ArtsessionForm from "../Artsession/ArtsessionForm"
import WinepurchaseForm from "../Winepurchase/WinepurchaseForm"
import ArtpieceForm from "../Artpiece/ArtpieceForm"

function CustomergroupInfo() {
    const [customergroup, setCustomergroup] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'customergroups/' + id)
        .then((res) => res.json())
        .then((json) => setCustomergroup(json));
    }, [id]);

    function createArtsession(artsessionInfo) {
        const newArtsession = {
          ...artsessionInfo,
          customergroup_id: id,
        };
    
        fetch(BASE_URL + `customergroups/${id}/artsessions`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newArtsession),
        })
          .then((res) => res.json())
          .then((json) => {
            const newCustomergroup = { ...customergroup, artsession: [...customergroup.artsessions, json] };
            setCustomergroup(newCustomergroup);
          });
      }

    function createArtpiece(artpieceInfo) {
      const newArtpiece = {
        ...artpieceInfo,
        customergroup_id: id,
      };
  
      fetch(BASE_URL + `customergroups/${id}/artsessions/${id}artpiece`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArtpiece),
      })
        .then((res) => res.json())
        .then((json) => {
          const newCustomergroup = { ...customergroup.artsession, artpiece: [...customergroup.artsessions.artpiece, json] };
          setCustomergroup(newCustomergroup);
        });
    }

    function createWinepurchase(winepurchaseInfo) {
      const newWinepurchase = {
        ...winepurchaseInfo,
        customergroup_id: id,
      };
  
      fetch(BASE_URL + `customergroups/${id}/winepurchase`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWinepurchase),
      })
        .then((res) => res.json())
        .then((json) => {
          const newCustomergroup = { ...customergroup, winepurchase: [...customergroup.winepurchase, json] };
          setCustomergroup(newCustomergroup);
        });
    }
    function createBrandofwine(brandofwineInfo) {
      const newBrandofwine = {
        ...brandofwineInfo,
        customergroup_id: id,
      };
  
      fetch(BASE_URL + `customergroups/${id}/winepurchase/${id}/brandofwine`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBrandofwine),
      })
        .then((res) => res.json())
        .then((json) => {
          const newCustomergroup = { ...customergroup.winepurchase, winepurchase: [...customergroup.winepurchase.brandofwine, json] };
          setCustomergroup(newCustomergroup);
        });
    }
  useEffect(() => {
      console.log(customergroup);
  }, [customergroup]);
    
    return (
      <div>
          {customergroup && (
          <>
          <p> {customergroup.party}, {customergroup.partyquantity}, {customergroup.customerstatus}</p>  
          <h3>Add New Art Session</h3>
            <ArtsessionForm createArtsession={createArtsession} />
            <h3>Add New Art Piece</h3>
            <ArtpieceForm createArtpiece={createArtpiece} /> 
            <h3>Add New Wine Purchase</h3>
            <WinepurchaseForm createWinepurchase={createWinepurchase} />
            <h3>Add New Art Piece</h3>
            <ArtpieceForm createBrandofwine={createBrandofwine} />
          </>
      )}
      </div>
      
      );
  
  }
  export default CustomergroupInfo;