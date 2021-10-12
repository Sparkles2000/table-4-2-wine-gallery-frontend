import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../constraints/index.js";
import Customergroup from './Customergroup';
import CustomergroupForm from './CustomergroupForm';

function CustomergroupContainer() {
    const [customergroups, setCustomergroups] = useState([]);

useEffect(() => {
    fetch(BASE_URL + "customergroups")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch customer group');
          }
          return res.json();
        })
      .then(json => {
          setCustomergroups(json);
      })
      .catch(error => {
          console.error("Something went wrong", error);
      })
  }, []);

  function populateCustomergroups() {
    console.log(customergroups);
    return customergroups.map((customergroup, idx) => (
      <Customergroup customergroup={customergroup} updateCustomergroup={updateCustomergroup} deleteCustomergroup={deleteCustomergroup} key={customergroup.id} />
    ));
  }

  function createCustomergroup(customergroup) {
    fetch(BASE_URL + "Customergroups", {
      method: "POST",
      body: JSON.stringify(customergroup),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setCustomergroups([...customergroups, json]));
  }
       
  function updateCustomergroup(customergroup) {
    fetch(BASE_URL + "customergroups/" + customergroup.id, {
        method: "PUT",
        body: JSON.stringify(customergroup),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });

    const newCustomergroups = customergroups.map ((c) => {
        if (c.id === customergroup.id) {
            c = customergroup;
        }
        
        return c;
    });
    setCustomergroups(newCustomergroups);
    }

function deleteCustomergroup(customergroup) {
    fetch(BASE_URL + "customergroups/" + customergroup.id, {
      method: "DELETE",
    });
    const newCustomergroups = customergroups.filter((c) => c.id !== customergroup.id);
setCustomergroups(newCustomergroups);
 }

    return (
            <div>
            <h2 className="customergroups-header">Customer Group</h2>
            <h2>Create Your Account Below</h2>  
            <p>The Perfect Getaway For The Day!</p>
            <div className="customergroupForm">
            <CustomergroupForm createCustomergroup={createCustomergroup} />
            </div>
            <div className="customergroups-container">{customergroups && populateCustomergroups()}</div>
          
        </div>
    );
  
}
export default CustomergroupContainer;