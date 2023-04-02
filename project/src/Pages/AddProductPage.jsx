import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../redux/Product/action'

function AddProductPage() {



/*  {
    "title": "D-HOR-FS REGULAR MEN BLACK SHIRT",
    "image": [
    "https://diesel.gumlet.io/product/410345190002/665/410345190002_1_2152.webp?compress=true&q=70",
    "https://diesel.gumlet.io/product/410345190002/665/410345190002_1_2152.webp?compress=true&q=70",
    "https://diesel.gumlet.io/product/410345190002/665/410345190002_3_1186.webp?compress=true&q=70"
    ],
    "description": "Men's shirt cut for a regular fit from dark-grey fix denim. A unique archival design, it's spliced with contrasting camouflage inserts along the seams and has a vintage logo nestled in the pocket. Subtle treatments confer a naturally worn look.",
    "color": "black",
    "price": 32999,
    "category": "shirt",
    "id": 140,
    "gender": "mens"
    }
*/
const init={
  title: "",
    image: "",
    description: "",
    color: "",
    price: 0,
    category: "",
    gender: ""
}

const [form,setForm]=useState(init)

const handleChange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
}

const dispatch=useDispatch()

const handleSubmit=(e)=>{
e.preventdefault()
axios.post(`https://waiting-brief-sort.glitch.me/product`,form).then(()=>dispatch(getAllData))
.then(()=>{setForm(init)
alert("Product added successfully")})
.catch(()=>alert("something went wrong"))
}

const {title,category,image,price,gender,color,description}=form
  return (
    <div style={{padding:"100px"}}>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={handleChange}  placeholder="enter title" /> <br/>
        <label>image</label>
        <input type="url" name="image"value={image} onChange={handleChange}  placeholder="image"/><br/>
        <label>description</label>
        <input type="text"name="description"value={description} onChange={handleChange}   placeholder="desc"/><br/>
        <label>color</label>
        <input type='text' name="color"value={color}  onChange={handleChange} placeholder='color'/><br/>
        <label>price</label>
        <input type="number"name="price" value={price}  onChange={handleChange} placeholder='price'/><br/>
        <label>category</label>
        <input type="text"name="category" value={category}  onChange={handleChange} placeholder="cat"/><br/>
        <label>gender</label>
        <input type='text' name="gender" value={gender} onChange={handleChange} placeholder='gender'/><br/>
        <button type='submit'>Submit</button>
             </form>
    </div>
  )
}

export default AddProductPage