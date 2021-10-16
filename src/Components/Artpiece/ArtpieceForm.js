// import { useHistory } from "react-router-dom";
import { useState } from "react";

function ArtpieceForm({createArtpiece}) {

    const [artists, setArtists] = useState("");
    const [piece, setPiece] = useState("");
    const [artstyle, setArtstyle] = useState("");
    const [img_src, setImg_src] = useState("");
    const Artpiece = {artists, piece, artstyle, img_src};
  
    const handleSubmit = (e) => {
        e.preventDefault();
        createArtpiece(Artpiece)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="all-form">
  
    <label className='form-label'>Artists Names</label>
    <input type="text" placeholder='Type Artists Name Here' required value={ artists }onChange={(e) => setArtists(e.target.value)} />

    <label className='form-label'>Name Of Piece</label>
    <input type="text" placeholder='Type Piece Name Here' required value={ piece }onChange={(e) => setPiece(e.target.value)} />

    <label className='form-label'>Artstyle</label>
    <input type="text" placeholder='Type The Artstyle Here' required value={ artstyle } onChange={(e) => setArtstyle(e.target.value)} />

    <label className="form-label">Image</label>
    <input type="text" placeholder='Type The Image File Here' value={ img_src }onChange={(e) => setImg_src(e.target.value)} />

<button>Submit</button>
<br />
<p>Artists: { artists }, Piece: { piece }, Artstyle: { artstyle }, Image: { img_src }</p>
</form>          
</div>
    );
}

export default ArtpieceForm;