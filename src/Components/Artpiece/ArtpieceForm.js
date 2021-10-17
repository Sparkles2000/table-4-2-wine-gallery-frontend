// import { useHistory } from "react-router-dom";
import { useState } from "react";
import '../Styles/All.css';

function ArtpieceForm({createArtpiece}) {

    const [artpiece, setArtpiece] = useState({artists:"", piece:"", artstyle:"", img_src:""});
  
    function handleChange(e) {
        const updatedValue = {...artpiece}
        updatedValue[e.target.name] = e.target.value
        setArtpiece(updatedValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createArtpiece(artpiece)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="all-form">
  
    <label className='form-label'>Artists Names</label>
    <input name="artists" value={ artpiece.artists }onChange={handleChange} />

    <label className='form-label'>Name Of Piece</label>
    <input name="piece" value={ artpiece.piece }onChange={handleChange} />

    <label className='form-label'>Artstyle</label>
    <input name="artstyle" value={ artpiece.artstyle } onChange={handleChange} />

    <label className="form-label">Image</label>
    <input name="img_src" value={ artpiece.img_src }onChange={handleChange} />
<br />
<button>Submit</button>
</form>          
</div>
    );
}

export default ArtpieceForm;