import React, { useEffect, useState } from 'react'
import "../CSS/Admin.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllData} from '../redux/Product/action'
import { Button} from '@chakra-ui/react'
import axios from 'axios'
import {Link} from "react-router-dom"


function AdminPage() {
const [page,setPage]=useState(1)

const dispatch=useDispatch()
const{product}=useSelector(store=>store.productReducer)

// const navigate=useNavigate()

const handleDelete=(id)=>{
  axios.delete(`https://waiting-brief-sort.glitch.me/product/${id}`)
  .then(()=>dispatch(getAllData))
}



useEffect(()=>{
  dispatch(getAllData)
  // dispatch(getWomenData)
},[page])



  return (
  <>
  <div style={{marginTop:"90px"}}>
  <Link to="/addProduct"><Button bg="blue">Add Product</Button></Link> </div>
    <div className="prod-list">
      {product?.map((el)=>{
        return <div key={el.id} className="prod-card" >
            <img src={el.image[0]} width="80%" alt={el.category}/>
              <div className='all'>
            <div className='Proddetails'>
            <h3>{el.title.slice(2,35)}</h3>
            <p>MRP :₹{el.price}</p>
            </div>
            <div className='buttons'>
         <Link to={`/product/${el.id}/edit`}><Button colorScheme='green'size='sm'  >Edit</Button></Link> 
            <Button colorScheme='red'size='sm' onClick={()=>handleDelete(el.id)} >Delete</Button>
            </div>
</div>
        </div>
      })}

    </div>
    <div className='pagination'>
            <Button m={4} size='sm'isDisabled={page<=1} onClick={()=>setPage(page-1)} >PREV</Button>
            <Button m={4} isDisabled={true} size='sm'>{page}</Button>
            <Button m={4} size='sm' onClick={()=>setPage(page+1)}>NEXT</Button>
    </div>
    </>
  )
}

export default AdminPage