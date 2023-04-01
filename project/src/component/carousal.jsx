import React from 'react'

import { Box} from '@chakra-ui/react';
import Slider from 'react-slick';
// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
 function Carousals({pictures,height}){
    // const [slider, setSlider] = useState(1);

 // These are the breakpoints which changes the position of the
 // buttons as the screen size changes
//  const top = useBreakpointValue({ base: '90%', md: '50%' });
//  const side = useBreakpointValue({ base: '30%', md: '10px' });

 // These are the images used in the slide
 

return(
    <Box
    position={'relative'}
    height={height}
    width={'full'}
    overflow={'hidden'}>
    {/* CSS files for react-slick */}
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
   
    <Slider {...settings} >
      {pictures?.map((url, index) => (
        <Box
          key={index}
          height={'2xl'}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${url})`}
        />
      ))}
    </Slider>
  </Box>
)
}
export default Carousals