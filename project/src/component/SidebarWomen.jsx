import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

function SidebarWomen() {
    const [searchParams,setSearchParams]=useSearchParams() 
    const initialOrder=searchParams.get("order")
    const initialParams=searchParams.getAll("category")  
    const[order,setOrder]=useState(initialOrder||"")
    const [category,setCategory]=useState(initialParams||[]) 


    const handleChange=(e)=>{
        let newCategory=[...category]
        const value=e.target.value
        if(newCategory.includes(value)){
          newCategory=newCategory.filter(( el)=>el!==value)
        }else{
        newCategory.push(value)
        }
        setCategory(newCategory)
        }
    const handleOrder=(e)=>{
        setOrder(e.target.value)
        }

        useEffect(()=>{
            let obj={
                category,
            }
            order&&(obj.order=order )
            setSearchParams(obj)
        },[category,order])

  return (
    <DIV>
        <div id='Filter'>
            <h2>Filter by Category</h2>
            <input type="checkBox" onChange={handleChange}  value={"jeans"} checked={category.includes("jeans")}/> 
            <label>Jeans</label> <br />
            <input type="checkBox" onChange={handleChange} value={"shoes"} checked={category.includes("shoes")}/> 
            <label>Shoes</label> <br />
            <input type="checkBox" onChange={handleChange} value={"bag"} checked={category.includes("bag")}/> 
            <label>Bag</label> <br />
            <input type="checkBox" onChange={handleChange} value={"belt"} checked={category.includes("belt")}/> 
            <label>Belt</label> <br />
            <input type="checkBox" onChange={handleChange} value={"wallet"} checked={category.includes("wallet")}/> 
            <label>Wallet</label> <br />
            <input type="checkBox" onChange={handleChange} value={"jacket"} checked={category.includes("jacket")}/> 
            <label>Jacket</label> <br />
            <input type="checkBox" onChange={handleChange} value={"t-shirt"} checked={category.includes("t-shirt")}/> 
            <label>T-Shirt</label> <br />
            <input type="checkBox" onChange={handleChange} value={"shirt"} checked={category.includes("shirt")}/> 
            <label>Shirt</label> <br />
        </div>
        <div id='sort' onChange={handleOrder}>
            <h2>Sorting by Price</h2>
           <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
                <label>Low to high</label>
                <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"} />
                <label>high to low</label>
        </div>

    </DIV>
  )
}

export default SidebarWomen

const DIV=styled.div`
    width: 100%;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    #Filter{
       input{
        margin-right: 10px;
        height: 20px;
       }
    }

    #sort{
        button{
            border: 1px solid grey;
            padding: 5px;
            margin: 5px;
            background-color: #e0e0e0;
        }
    }
`