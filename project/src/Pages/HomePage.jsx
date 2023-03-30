import React from 'react'
import Carousals from '../component/carousal'
import MySlider from '../component/slider'
import "../CSS/Home.css"
import { data1, data2 } from '../shortApi/api1'

const banner=[
  "https://diesel.gumlet.io/banner/167825364411.webp?compress=true&q=70",
  "https://diesel.gumlet.io/banner/1678449643Website%20Banner%20&%20Ads_1-01.webp?compress=true&q=70"
]


function HomePage() {
  return (
    <div>
<Carousals pictures={banner} height={"700px"}/>
<div className='top-home'>
  <div className='box-1'>
    <h2>FIT OF THE WEEK</h2>
    <h2>MAN|WOMAN</h2>
    <h3>2019 D-STRUKT</h3>
    <p>Always cool, always in style, the D-STRUKT is an essential denim silhouette defined by a slim leg, mid-rise waist and classic fit.</p>
    <button>SHOP NOW</button>
  </div>
  <div className='box-2'>
<MySlider props={data1}/>
  </div>
</div>
<div className='car-2'>
  <MySlider props={data2}/>
</div>
<div className='car-3'>
<div className='Box-1'>
    <h2>HIGHLIGHTS</h2>
    <h2>MAN|WOMAN</h2>
    <h3>MONOGRAM EDITION</h3>
    <p>A new evolution of the signature Diesel monogram, spelled out and applied to Denim, Ready to Wear and Accessories</p>
    <button>SHOP NOW</button>
  </div>
  <div className='Box-2'>
<MySlider props={data1} />
  </div>
</div>
<div className='cards'>
<img src="https://diesel.gumlet.io/cms_images/1676638237SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_BIG%20D_16_9_300dpi_16-9_300DPI.webp?compress=true&q=70" alt="cards"/>
<img src="https://diesel.gumlet.io/cms_images/1676638471SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_005_4.webp?compress=true&q=70" alt="cards"/>
<img src="https://diesel.gumlet.io/cms_images/1676639325SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_028_4.webp?compress=true&q=70" alt="cards"/>
<img src="https://diesel.gumlet.io/cms_images/1676638608GEN6%20GRIFFED%20SMARTWATCH%20FW22_STILLS_DZT2042_JPEG_GEN6_Still_[HO22]_[DZT2042]%2016-9.webp?compress=true&q=70" alt="cards"/>
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
  <img src='https://diesel.gumlet.io/cms_images/1671614575icons-05.webp' alt="contact"/>
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
<img src="https://diesel.gumlet.io/cms_images/1671005754Artboard%203@3x.webp" alt="banner"/>
<button className='button1'>SHOP MAN</button>
<button className='button2'>SHOP WOMEN</button>
</div>


    </div>
  )
}

export default HomePage