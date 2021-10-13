// import { useHistory } from "react-router-dom";
import { useState } from "react";

function WinepurchaseForm({createWinepurchase}) {

    const [purchasepackage, setPurchasepackage] = useState("");
    const [purchased, setPurchased] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        createWinepurchase(winepurchase)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="winepurchase-form">
  
    <label className='form-label'>Package Purchased</label>
    <input type="text" placeholder='Type Purchase Here' required value={ purchasepackage }onChange={(e) => setPurchasepackage(e.target.value)} />

    <label className='form-label'>Purchase Includes</label>
    <input type="text" placeholder='Type Party Quantitiy Here' required value={ purchased } onChange={(e) => setPurchased(e.target.value)} />


<button>Submit</button>
<br />
<p>:Purchase Package: { purchasepackage }, purchased: { purchased }</p>
</form>          
</div>
    );
}

export default WinepurchaseForm;