import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProduct } from '../redux/WomenProduct/action'
import WomenProductCard from './WomenProductCard'

export default function WomanProductList() {
    const [page, setPage]=useState(1)
    const dispatch=useDispatch()
    const {women}=useSelector((store)=>store.womenReducer)

    useEffect(()=>{
        dispatch(getProduct(page))
    },[])

  return (
    <DIV>{
    women.length>0 &&  women.map((product)=>{
        return <WomenProductCard key={product.id} {...product}/>
    })   
    }</DIV>
  )
}

const DIV=styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`