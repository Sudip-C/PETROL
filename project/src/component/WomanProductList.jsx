import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProduct } from '../redux/WomenProduct/action'
import WomenProductCard from './WomenProductCard'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export default function WomanProductList() {
    const dispatch=useDispatch()
    const {women}=useSelector((store)=>store.womenReducer)
    const [searchParams]=useSearchParams()
    const location=useLocation()
    let obj={
      params:{
          category:searchParams.getAll("category"),
          _sort:searchParams.get("order") && "price",
          _order:searchParams.get("order")
      }
   }

    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search])

  return (
    <DIV>{
    women.length>0 &&  women.map((product)=>{
        return <Link to={`/product/${product.id}` } key={product.id} ><WomenProductCard key={product.id} {...product}/></Link>
    })   
    }</DIV>
  )
}

const DIV=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* gap: 10px; */
`