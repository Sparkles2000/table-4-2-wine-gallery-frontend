// import { useHistory } from "react-router-dom";
import { useState } from "react";

function BrandofwineForm({createBrandofwine}) {

    const [brand, setBrand] = useState("");
    const [age, setAge] = useState("");
    const [winetype, setWinetype] = useState("");
    const [price, setPrice] = useState("");
    const [drysweet, setDrysweet] = useState("");
    const [alcoholcontent, setAlcoholcontent] = useState("");
    const [img_src, setImg_src] = useState("");
    const brandofwine = {brand, age, winetype, price, drysweet, alcoholcontent, img_src};

    const handleSubmit = (e) => {
        e.preventDefault();
        createBrandofwine(brandofwine)
    }

    return (
        <div>
            
            <form onSubmit={ handleSubmit } className="brandofwine-form">
  
                <label className='form-label'>Brand</label>
                <input type="text " placeholder='Type Brand Here' required value={ brand } onChange={(e) => setBrand(e.target.value)} />

                <label className="form-label">Aged Since</label>
                <input type=" integer " placeholder='Type Year Here' value={ age } onChange={(e) => setAge(e.target.value)} />

                <label className="form-label">Wine Type</label>
                <input type=" text " placeholder='Type Wine Type Here' value={ winetype } onChange={(e) => setWinetype(e.target.value)} />

                <label className="form-label">Price</label>
                <input type=" text " placeholder='Type Price Here' value={ price } onChange={(e) => setPrice(e.target.value)} />

                <label className="form-label">Dry Or Sweet</label>
                <input type=" text " placeholder='Type Whether The wine Is Dry Or sweet Here' value={ drysweet } onChange={(e) => setDrysweet(e.target.value)} />

                <label className="form-label">Alcohol Content</label>
                <input type=" text " placeholder='Type Alocohol Content Here' value={ alcoholcontent } onChange={(e) => setAlcoholcontent(e.target.value)} />

                <label className="form-label">Wine Image</label>
                <input type=" text " placeholder='Type Image Url Here' value={ img_src } onChange={(e) => setImg_src(e.target.value)} />

                        <button>Submit</button>
                        <br />
                        <p>Brand: { brand }, Age: { age }, Wine Type: { winetype }, Price: { price }, Dry Or Sweet: { drysweet }, Alcohol Content: { alcoholcontent }, Wine Image: { img_src }</p>
            </form>
           
        </div>
    );
}

export default BrandofwineForm;