import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import ArtsessionForm from "../Artsession/ArtsessionForm"
import WinepurchaseForm from "../Winepurchase/WinepurchaseForm"
import ArtpieceForm from "../Artpiece/ArtpieceForm"
import '../Styles/All.css';

function CustomergroupInfo() {
    const [customergroup, setCustomergroup] = useState(null);
  
    const { id } = useParams();
//  SHOW
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
      //POST Artsessions
        fetch(BASE_URL + `customergroups/${id}/artsessions`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newArtsession),
        })
          .then((res) => res.json())
          .then((json) => {
            const newCustomergroup = { ...customergroup, artsessions: [...customergroup.artsessions, json] };
            setCustomergroup(newCustomergroup);
          });
      }

    function createArtpiece(artpieceInfo) {
      const newArtpiece = {
        ...artpieceInfo,
        customergroup_id: id,
      };
  // POST
      fetch(BASE_URL + `customergroups/${id}/artsessions/${id}artpieces`, {
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
  
      fetch(BASE_URL + `customergroups/${id}/winepurchases`, {
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
  
      fetch(BASE_URL + `customergroups/${id}/winepurchase/${id}/brandofwines`, {
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

	const displayArtsession = () => {
		return customergroup.artsessions.map((artsession) => (
			<all-card key={`${artsession.id} - ${artsession.artstyle}`} artsession={artsession} />
  ));
};
// const displayArtpiece = () => {
//   return customergroup.artsession.artpiece.map((artpiece) => (
//     <all-card key={`${artpiece.id} - ${artpiece.piece}`} artpiece={artpiece} />
// ));
// };
// const displayWinepurchase = () => {
//   return customergroup.winepurchase.map((winepurchase) => (
//     <all-card key={`${winepurchase.id} - ${winepurchase.order}`} winepurchase={winepurchase} />
// ));
// };
// const displayBrandofwine = () => {
//   return customergroup.winepurchase.brandofwine.map((brandofwine) => (
//     <all-card key={`${brandofwine.id} - ${brandofwine.artstyle}`} brandofwine={brandofwine} />
// ));
// };
    return (
      <div>
          {customergroup && (
          <>
          <h3> Party: {customergroup.party}</h3>
          <p>Party Quantity: {customergroup.partyquantity}, Customer Status: {customergroup.customerstatus}</p> 

          {displayArtsession()}
          <h3>Add New Art Session</h3>
            <ArtsessionForm createArtsession={createArtsession} />
            {/* {displayArtpiece()} */}
            <h3>Add New Art Piece</h3>
            <ArtpieceForm createArtpiece={createArtpiece} />
            {/* {displayWinepurchase()}  */}
            <h3>Add New Wine Purchase</h3>
            <WinepurchaseForm createWinepurchase={createWinepurchase} />
            {/* {displayBrandofwine()} */}
            <h3>Add New Brand Of Wine</h3>
            <ArtpieceForm createBrandofwine={createBrandofwine} />
          </>
      )}
      </div>
      
      );
  
  }
  export default CustomergroupInfo;