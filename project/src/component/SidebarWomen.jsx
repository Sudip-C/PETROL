import React from 'react'
import styled from 'styled-components'

function SidebarWomen() {
  return (
    <DIV>
        <div id='Filter'>
            <h2>Filter by Category</h2>
            <input type="checkBox" /> 
            <label>Jeans</label> <br />
            <input type="checkBox" /> 
            <label>Shoes</label> <br />
            <input type="checkBox" /> 
            <label>Bag</label> <br />
            <input type="checkBox" /> 
            <label>Belt</label> <br />
            <input type="checkBox" /> 
            <label>Wallet</label> <br />
            <input type="checkBox" /> 
            <label>Jacket</label> <br />
            <input type="checkBox" /> 
            <label>T-Shirt</label> <br />
            <input type="checkBox" /> 
            <label>Shirt</label> <br />
        </div>
        <div id='sort'>
            <h2>Sorting by Price</h2>
            <button>High to Low</button> <br />
            <button>Low to High</button>
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