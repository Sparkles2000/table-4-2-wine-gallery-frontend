import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Winepurchase from './Winepurchase';
import WinepurchaseForm from './WinepurchaseForm';

function WinepurchaseContainer() {
    const [winepurchases, setwinepurchases] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "winepurchases")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch customer groups');
          }
          return res.json();
        })
      .then(json => {
          setwinepurchases(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, []);

  function populateWinepurchases() {
    console.log(winepurchases);
    return winepurchases.map((winepurchase, idx) => (
      <Winepurchase winepurchase={winepurchase} updatewinepurchase={updateWinepurchase} key={winepurchase.id} />
    ));
  }

  function createWinepurchase(winepurchase) {
    fetch(BASE_URL + "winepurchases", {
      method: "POST",
      body: JSON.stringify(winepurchase),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setwinepurchases([...winepurchases, json]));
  }
       
  function updateWinepurchase(winepurchase) {
    fetch(BASE_URL + "winepurchases/" + winepurchase.id, {
        method: "PUT",
        body: JSON.stringify(winepurchase),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });

    const newWinepurchases = winepurchases.map ((w) => {
        if (w.id === winepurchase.id) {
            w = winepurchase;
        }
        
        return w;
    });
    setWinepurchases(newWinepurchases);
    }

    return (
            <div>
            <h2 className="winepurchases-header">Pur</h2>
            <h2>Create Your Account Below</h2>  
            <p>The Perfect Getaway For The Day!</p>
            <div className="winepurchaseForm">
            <WinepurchaseForm createWinepurchase={createWinepurchase} />
            </div>
            <div className="winepurchases-container">{winepurchases && populateWinepurchases()}</div>
          
        </div>
    );
  
}
export default WinepurchaseContainer;