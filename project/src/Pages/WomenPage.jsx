import React from 'react'
import styled from 'styled-components'
import SidebarWomen from '../component/SidebarWomen'
import WomanProductList from '../component/WomanProductList'

function WomenPage() {
  return (
    <DIV>
      <h1>WOMAN</h1>
      <div className='Main-div'>
      <SidebarWomen/>
      <WomanProductList/>
      </div>
    </DIV>
  )
}

export default WomenPage

const DIV=styled.div`
    padding: 20px;
  
    .Main-div{
      /* width:50% */
    margin-top: 20px;
    /* justify-content: space-around; */
  }

    
  h1{
    font-size: 24px;
    font-weight: bold;
  }
`