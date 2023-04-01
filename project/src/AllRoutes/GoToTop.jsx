import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import { Button, Image } from "@chakra-ui/react";

class GoToTop extends Component {
  render() {
    return (
      <BackToTop
        showOnScrollUp
        showAt={200}
        speed={500}
        easing="easeInOutQuint"
      >

        <Image w='70px' src='https://ps.w.org/back-to-the-top-button/assets/icon-256x256.png?rev=2283756' />
  
      </BackToTop>
    );
  }
}
export default GoToTop
