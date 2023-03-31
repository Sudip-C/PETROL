import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


import "../CSS/Slider.css"


export default function MySlider({props}) {
// let data=[1,2]
const settings = {
  
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1000,
  draggable:true,
  arrows:false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]

};

return (
  <div className="App" >
   
<Slider {...settings}>
{props?.map((el)=>{
return <div key={el.title} className="car"
>
  <img src={el.image} alt="name" />
  <h4>{el.title}</h4>
  <p>{el.price}</p>
</div>
})}
</Slider>


  </div>
)
}
