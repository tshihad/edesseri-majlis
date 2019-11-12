import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import img1 from '../../images/slider/slider1.jpg'
import img2 from '../../images/slider/slider2.jpg'
import img3 from '../../images/slider/slider3.jpg'
import img4 from '../../images/slider/slider4.jpg'
import img5 from '../../images/slider/slider5.jpg'

// green color for arrow
// color: #033d19;


const Control = styled.div`
background-color: transparent;
color: white;
text-align: center;
width: 4vw;
height: 4vw;
border-radius: 4vw;
`;
export default function Slider() {
  return (
    <Carousel dragging={true}
      speed={1500}
      autoplay={true}
      autoplayInterval={3000}
      pauseOnHover={true}
      enableKeyboardControls={true}
      heightMode={'first'}
      renderCenterLeftControls={({ previousSlide }) => (
        <Control onClick={previousSlide}>
          <ArrowLeft style={{ fontSize: "3vw", fontWeight: "bolder", color:"#e5eee5"}} />
        </Control>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Control onClick={nextSlide}>
          <ArrowRight style={{ fontSize: "3vw" }} />
        </Control>
      )}
      
    >
      <img src={img1} alt="img1" />
      <img src={img2} alt="img2" />
      <img src={img3} alt="img3" />
      <img src={img4} alt="img4" />
      <img src={img5} alt="img5" />
    </Carousel>
  )
}