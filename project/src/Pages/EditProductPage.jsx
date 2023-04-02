import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editData } from '../redux/Product/action'
import axios from 'axios'

function EditProductPage() {
const {id}=useParams()
const dispatch=useDispatch()
const {product}=useSelector(store=>store.productReducer)

const[data,setData]=useState('')


const handleChange=(e)=>{
  const {name,value}=e.target
  setData(prev=>{
      return{
          ...prev,[name]:value
      }
  })
  }

  const handleEdit =(e)=>{
    e.preventDefault()
    dispatch(editData(data,id))
    .then(()=>alert("success"))
    }
    
const singledata=(id)=>{
  axios.get(`https://waiting-brief-sort.glitch.me/product/${id}`)
  .then((res)=>setData(res.data))
}

useEffect(()=>{
  singledata(id)

},[])
  return (
    <div style={{marginTop:"90px"}}>
       <div style={{padding:"100px"}}>
      <form onSubmit={handleEdit}>
        <label>Title</label>
        <input type="text" name="title" value={data.title} onChange={handleChange}  placeholder="enter title" /> <br/>
        <label>image</label>
        <input type="url" name="image"value={data.image} onChange={handleChange}  placeholder="image"/><br/>
        <label>description</label>
        <input type="text"name="description"value={data.description} onChange={handleChange}   placeholder="desc"/><br/>
        <label>color</label>
        <input type='text' name="color"value={data.color}  onChange={handleChange} placeholder='color'/><br/>
        <label>price</label>
        <input type="number"name="price" value={data.price}  onChange={handleChange} placeholder='price'/><br/>
        <label>category</label>
        <input type="text"name="category" value={data.category}  onChange={handleChange} placeholder="cat"/><br/>
        <label>gender</label>
        <input type='text' name="gender" value={data.gender} onChange={handleChange} placeholder='gender'/><br/>
        <button type='submit'>Submit</button>
             </form>
    </div>
      </div>
  )
}

export default EditProductPage