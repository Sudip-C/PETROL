import React from 'react'
import Carousals from '../component/carousal'
import MySlider from '../component/slider'
import "../CSS/Home.css"
import { data1, data2 } from '../shortApi/api1'
import { Link, useSearchParams } from 'react-router-dom'
import ProductData from '../component/PaymentPopup/ProductData'
import FilterPage from '../component/PaymentPopup/FilterPage'
import ProductPage from './ProductPage'
import banner1 from '../photos/banner1.jpg'
import banner2 from '../photos/banner2.jpg'

const banner=[
  banner1,
  banner2
]


function HomePage() {

//   const [searchParams]=useSearchParams()
// const mydata=searchParams.get("gender")
// localStorage.setItem("pageName",JSON.stringify(mydata))
// const anme=JSON.parse(localStorage.getItem("pageName"))
// console.log(anme)
// if(anme!==null){
//   return (
  
//   <ProductPage/>
  
//   )
// }else

  return (
    <div style={{paddingTop:"70px"}}>
<Carousals pictures={banner} height={"700px"}/>
<div className='top-home'>
  <div className='box-1'>
    <h1>FIT OF THE WEEK</h1>
    <h2>MAN | WOMAN</h2>
    <h3>2019 D-STRUKT</h3>
    <p>Always cool, always in style, the D-STRUKT is an essential denim silhouette defined by a slim leg, mid-rise waist and classic fit.</p>
    <button>SHOP NOW</button>
  </div>
  <div className='box-2'>
<Link to="/product"><MySlider props={data1} /></Link>
  </div>
</div>
<div className='car-2'>
  <MySlider props={data2} />
</div>
<div className='car-3'>
<div className='Box-1'>
    <h1>HIGHLIGHTS</h1>
    <h2>MAN | WOMAN</h2>
    <h3>MONOGRAM EDITION</h3>
    <p>A new evolution of the signature Diesel monogram, spelled out and applied to Denim, Ready to Wear and Accessories</p>
    <button>SHOP NOW</button>
  </div>
  <div className='Box-2'>
  <Link to="/product"><MySlider props={data1} /></Link>
  </div>
</div>
<div className='cards'>
<img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/17331682461336x591.webp?compress=true&q=70" alt="cards"/>
<img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1732709128Desktop_3.webp?compress=true&q=70" alt="cards"/>
<img src="https://cdn.pixelspray.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410373857006/665/410373857006_1_4264.webp" alt="cards"/>
<img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:450)/product/410372560020/665/410372560020_1_3519.webp" alt="cards"/>
</div>



<div className='bottom-banner'>
<img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1732709128Desktop_3.webp?compress=true&q=70" alt="banner"/>
<button className='button1'>SHOP MAN</button>
<button className='button2'>SHOP WOMEN</button>
</div>


    </div>
  )
}

export default HomePage
