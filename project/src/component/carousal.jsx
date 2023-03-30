import React, { useState } from 'react'

import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
 function Carousals({pictures,height}){
    const [slider, setSlider] = useState(1);

 // These are the breakpoints which changes the position of the
 // buttons as the screen size changes
 const top = useBreakpointValue({ base: '90%', md: '50%' });
 const side = useBreakpointValue({ base: '30%', md: '10px' });

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
    {/* Left Icon */}
    <IconButton
      aria-label="left-arrow"
      colorScheme="messenger"
      borderRadius="full"
      position="absolute"
      left={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}>
      <BiLeftArrowAlt />
    </IconButton>
    {/* Right Icon */}
    <IconButton
      aria-label="right-arrow"
      colorScheme="messenger"
      borderRadius="full"
      position="absolute"
      right={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}>
      <BiRightArrowAlt />
    </IconButton>
    {/* Slider */}
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {pictures.map((url, index) => (
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