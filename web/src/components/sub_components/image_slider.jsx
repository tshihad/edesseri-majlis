import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import bc from '../../images/background.jpg'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.JPG'
import img5 from '../../images/img5.jpg'

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
      <img src={bc} alt="img1" />
      <img src={img1} alt="img2" />
      <img src={img2} alt="img3" />
      <img src={img3} alt="img4" />
      <img src={img4} alt="img5" />
      <img src={img5} alt="img6" />
    </Carousel>
  )
}