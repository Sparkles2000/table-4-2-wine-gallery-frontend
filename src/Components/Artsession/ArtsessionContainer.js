import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Artsession from './Artsession';
import ArtsessionForm from './ArtsessionForm';

function ArtsessionContainer() {
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

  function populateArtsessions() {
    console.log(artsessions);
    return artsessions.map((artsession, idx) => (
      <Artsession artsession={artsession} updateArtsession={updateArtsession} key={artsession.id} />
    ));
  }

  function createArtsession(artsession) {
    fetch(BASE_URL + "artsessions", {
      method: "POST",
      body: JSON.stringify(artsession),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setArtsessions([...artsessions, json]));
  }
       
  function updateArtsession(artsession) {
    fetch(BASE_URL + "artsessions/" + artsession.id, {
        method: "PUT",
        body: JSON.stringify(artsession),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });

    const newArtsessions = artsessions.map ((a) => {
        if (a.id === artsession.id) {
            a = artsession;
        }
        
        return a;
    });
    setArtsessions(newArtsessions);
    }
    
    return (
            <div>
            <h2 className="artsessions-header">Customer Group</h2>
            <h2>Choose A Session</h2>  
            <p>Pick the session that best fits your needs today!</p>
            <div className="artsessionForm">
            <ArtsessionForm createArtsession={createArtsession} />
            </div>
            <div className="artsessions-container">{artsessions && populateArtsessions()}</div>
          
        </div>
    );
  
}

  export default ArtsessionContainer;