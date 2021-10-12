import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function CustomergroupInfo() {
    const [customergroup, setCustomergroup] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      fetch(BASE_URL + 'customergroups/id')
        .then((res) => res.json())
        .then((json) => setCustomergroup(json));
    }, [id]);
  
    useEffect(() => {
        console.log(customergroup);
    }, [customergroup]);
    
    return (
      <div>
          {customergroup && (
          <>
          <p> {customergroup.party}, {customergroup.partyquantity}, {customergroup.customerstatus}</p>  
          </>
      )}
      </div>
      
      );
  
  }
  export default CustomergroupInfo;