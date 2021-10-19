import React from 'react';
import {useParams} from 'react-router';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Artsession from './Artsession';
import ArtsessionForm from './ArtsessionForm';
import '../Styles/All.css';


function ArtsessionContainer() {
    const [artsessions, setArtsessions] = useState([]);
    const { id } = useParams();

    
useEffect(() => {
    fetch(BASE_URL + `customergroups/${id}/artsessions`)
      .then(res => {
          if (!res.ok) {
              throw Error('Could not fetch Art Session');
          }
          return res.json();
        })
      .then(json => {
          setArtsessions(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, [id]);
  function populateArtsessions() {
    console.log(artsessions);
    return artsessions.map((artsession, idx) => (
      <Artsession artsession={artsession} updateArtsession={updateArtsession} key={artsession.id} />
    ));
  }

  function createArtsession(artsession) {
    fetch(BASE_URL + `customergroups/${id}/artsessions`, {
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
    fetch(BASE_URL + `customergroups/${id}/artsessions/` + artsession.id, {
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
            <div className="all-container">
            <h2 className="all-header">Art Sessions</h2>
            <h2>Choose A Session</h2>  
            <h4>Pick the session that best fits your needs today!</h4>
            <div className="all-form">
            <ArtsessionForm createArtsession={createArtsession} />
            </div>
            <div className="all-container">{artsessions && populateArtsessions()}</div>
          
        </div>
    );
  
}

  export default ArtsessionContainer;