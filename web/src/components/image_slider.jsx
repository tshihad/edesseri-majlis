import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import bc from '../images/background.jpg'

// green color for arrow
// color: #033d19;


const Control = styled.div`
background-color: transparent;
color: white;
text-align: center;
padding-top: 1vw;
width: 4vw;
height: 4vw;
border-radius: 4vw;
`;
export default function Slider() {
  return (
    <Carousel dragging={true}
      speed={1500}
      autoplay={true}
      autoplayInterval={2000}
      pauseOnHover={true}
      enableKeyboardControls={true}
      heightMode={'first'}
      renderCenterLeftControls={({ previousSlide }) => (
        <Control onClick={previousSlide}>
          <ArrowLeft style={{ fontSize: "3vw", fontWeight: "bolder" }} />
        </Control>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <Control onClick={nextSlide}>
          <ArrowRight style={{ fontSize: "3vw" }} />
        </Control>
      )}
      
    >
      <img src={bc} alt="img1" />
      <img src={bc} alt="img2" />
      <img src={bc} alt="img3" />
      <img src={bc} alt="img4" />
      <img src={bc} alt="img5" />
      <img src={bc} alt="img6" />
    </Carousel>
  )
}