// import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../Styles/All.css';

function WinepurchaseForm({createWinepurchase}) {

    const [purchasepackage, setPurchasepackage] = useState("");
    const [purchased, setPurchased] = useState("");
    const winepurchase = {purchasepackage, purchased};
  
    const handleSubmit = (e) => {
        e.preventDefault();
        createWinepurchase(winepurchase)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="all-form">
  
    <label className='form-label'>Package Purchased</label>
    <input type="text" placeholder='Type Purchase Here' required value={ purchasepackage }onChange={(e) => setPurchasepackage(e.target.value)} />

    <label className='form-label'>Purchase Includes</label>
    <input type="text" placeholder='Type Party Quantitiy Here' required value={ purchased } onChange={(e) => setPurchased(e.target.value)} />
    
    <br />
<button>Submit</button>
</form>          
</div>
    );
}

export default WinepurchaseForm;