import React from 'react'
import Carousals from '../component/carousal'
import MySlider from '../component/slider'
import "../CSS/Home.css"
import { data1, data2 } from '../shortApi/api1'
import { Link, useSearchParams } from 'react-router-dom'
import ProductData from '../component/PaymentPopup/ProductData'
import FilterPage from '../component/PaymentPopup/FilterPage'
import ProductPage from './ProductPage'

const banner=[
  "https://diesel.gumlet.io/banner/167825364411.webp?compress=true&q=70",
  "https://diesel.gumlet.io/banner/1678449643Website%20Banner%20&%20Ads_1-01.webp?compress=true&q=70"
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

<div className='badges'>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614479icons-01.webp' alt="contact"/>
  <h3>PERSONALISED STYLING</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614498icons-02.webp' alt="contact"/>
  <h3>30 DAY FREE RETURN</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614517icons-03.webp' alt="contact"/>
  <h3>AUTHENTIC PRODUCTS</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614563icons-04.webp' alt="contact"/>
  <h3>FLEXIBLE & SECURE PAYMENTS</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614575icons-05.webp' alt="contact"/>
  <h3>LIFETIME SUPPORT</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614585icons-06.webp' alt="contact"/>
  <h3>PRE-ORDER</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614595icons-07.webp' alt="contact"/>
  <h3>EXCLUSIVE OFFERS</h3>
</div>
<div>
  <img src='https://diesel.gumlet.io/cms_images/1671614606icons-08.webp' alt="contact"/>
  <h3>FREE SHIPPING</h3>
</div>
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
