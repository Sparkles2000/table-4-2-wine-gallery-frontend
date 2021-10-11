// import { useHistory } from "react-router-dom";
import { useState } from "react";




function CustomergroupForm({createCustomergroup}) {

    const [party, setParty] = useState("");
    const [partyquantity, setPartyquantity] = useState("");
    const [customerstatus, setCustomerstatus] = useState("");
    const customergroup = {party, partyquantity, customerstatus};

  
    const handleSubmit = (e) => {
        e.preventDefault();
        createCustomergroup(customergroup)
    }


    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="customergroup-form">
  
  <label className='form-label'>Party</label>
  <input type="text" placeholder='Party' required value={ party }onChange={(e) => setParty(e.target.value)} />

<label className='form-label'>Party Quantity</label>
  <input type="text" placeholder='Party Quantity' required value={ partyquantity } onChange={(e) => setPartyquantity(e.target.value)} />

  <label className="form-label">Customer Status</label>
  <input type="text" placeholder='Status' value={ customerstatus }onChange={(e) => setCustomerstatus(e.target.value)} />

<button>Submit</button>
<br />
<p>Party: { party }</p>
<p>Party Quantity { partyquantity }</p>
<p>Customer Status: { customerstatus }</p>
</form>          
</div>
    );
}

export default CustomergroupForm;