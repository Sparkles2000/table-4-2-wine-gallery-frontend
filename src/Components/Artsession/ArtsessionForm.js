// import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../Styles/All.css';

function ArtsessionForm({createArtsession}) {

    const [artsession, setArtsession] = useState({artstyle:"", price:"", sessiontype:"", piecespergroup:""});
  
    function handleChange(e) {
        const updatedValue = {...artsession}
        updatedValue[e.target.name] = e.target.value
        setArtsession(updatedValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createArtsession(artsession)
    }

    return (
        <div>
            
    <form className="all-form" onSubmit={ handleSubmit } >
  
    <label className='form-label'>Artstyle:</label>
    <input name="artstyle" value={ artsession.artstyle }onChange={handleChange} />

    <label className='form-label'>Price:</label>
    <input name="price" value={ artsession.price } onChange={handleChange} />

    <label className="form-label">Session Type:</label>
    <input name="sessiontype" value={ artsession.sessiontype }onChange={handleChange} />

    <label className="form-label">Pieces Painted:</label>
    <input name="piecespergroup" value={ artsession.piecespergroup }onChange={handleChange} />
    <br />
    <button>Submit</button>
</form>          
</div>
    );
}

export default ArtsessionForm;