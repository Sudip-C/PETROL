import React from 'react'
import styled from 'styled-components'
import SidebarWomen from '../component/SidebarWomen'
import WomanProductList from '../component/WomanProductList'

function WomenPage() {
  return (
    <DIV>
      <h1>WOMAN</h1>
      <div className='Main-body'>
      <SidebarWomen/>
      <WomanProductList/>
      </div>
    </DIV>
  )
}

export default WomenPage

const DIV=styled.div`
    padding: 20px;

  .Main-body{
    margin-top: 20px;
    justify-content: space-around;
    display: flex;
  }

    
  h1{
    font-size: 24px;
    font-weight: bold;
  }
`