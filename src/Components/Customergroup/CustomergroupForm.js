// import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../Styles/All.css';

function CustomergroupForm({createCustomergroup}) {

    const [customergroup, setCustomergroup] = useState({party:"", partyquantity:"", customerstatus:""});
    
    function handleChange(e) {
        const updatedValue = {...customergroup}
        updatedValue[e.target.name] = e.target.value
        setCustomergroup(updatedValue)
    }       
    const handleSubmit = (e) => {
        e.preventDefault();
        createCustomergroup(customergroup)
    }
    
    return (
        <div>
            
    <form onSubmit={ handleSubmit } className="customergroup-form">
  
    <label className='form-label'>Party: </label>
    <input name="party" value={ customergroup.party }onChange={handleChange} />

    <label className='form-label'>Party Quantity: </label>
    <input name="partyquantity" value={ customergroup.partyquantity } onChange={handleChange} />

    <label className="form-label">Customer Status: </label>
    <input name="customerstatus" value={ customergroup.customerstatus }onChange={handleChange} />
    <br />
<button>Submit</button>
</form>          
</div>
    );
}

export default CustomergroupForm;