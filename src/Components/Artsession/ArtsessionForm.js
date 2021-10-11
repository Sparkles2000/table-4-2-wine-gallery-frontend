function ArtsessionForm({createArtsession}) {

    const [artstyle, setArtstyle] = useState("");
    const [price, setPrice] = useState("");
    const [sessiontype, setSessiontype] = useState("");
    const [piecespergroup, setPiecespergroup] = useState("");
    const artsession = {artstyle, price, sessiontype, piecespergroup};
  
    const handleSubmit = (e) => {
        e.preventDefault();
        createArtsession(artsession)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="artsession-form">
  
    <label className='form-label'>Artstyle</label>
    <input type="text" placeholder='Type The Artstyle Here' required value={ artstyle }onChange={(e) => setArtstyle(e.target.value)} />

    <label className='form-label'>Price</label>
    <input type="text" placeholder='Type The Price Here' required value={ price } onChange={(e) => setPrice(e.target.value)} />

    <label className="form-label">Session Type</label>
    <input type="text" placeholder='Type The Type Of Session Here' value={ sessiontype }onChange={(e) => setSessiontype(e.target.value)} />

    <label className="form-label">Pieces Painted</label>
    <input type="text" placeholder='Type The Amout Of Pieces here' value={ piecespergroup }onChange={(e) => setPiecespergroup(e.target.value)} />
<button>Submit</button>
<br />
<p>Artstyle: { artstyle }, Price: { price }, Session Type: { sessiontype },  Pieces Painted: { piecespergroup }</p>
</form>          
</div>
    );
}

export default ArtsessionForm;