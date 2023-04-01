import React, { useEffect, useState } from 'react'
import "../CSS/Admin.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMenData, getWomenData } from '../redux/Product/action'
import { Button} from '@chakra-ui/react'
import axios from 'axios'


function AdminPage() {
const [page,setPage]=useState(1)

const dispatch=useDispatch()
const {Menproduct,Womenproduct}=useSelector(store=>store.productReducer )


// const allData=[...Menproduct,...Womenproduct]
// console.log(allData)

let obj={
  params:{
    _limit:12,
    _page:page
  }
}
const handleDelete=(id)=>{
  axios.delete(`https://waiting-brief-sort.glitch.me/woman/${id}`)
  .then(()=>dispatch(getMenData(obj)))
}



useEffect(()=>{
  dispatch(getMenData(obj))
  dispatch(getWomenData)
},[page])



  return (
  <>
    <div className="prod-list">
      {Menproduct?.map((el)=>{
        return <div key={el.id} className="prod-card" >
            <img src={el.image[0]} width="80%" alt={el.category}/>
              <div className='all'>
            <div className='Proddetails'>
            <h3>{el.title.slice(2,35)}</h3>
            <p>MRP :₹{el.price}</p>
            </div>
            <div className='buttons'>
            <Button colorScheme='green'size='sm'>Edit</Button>
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