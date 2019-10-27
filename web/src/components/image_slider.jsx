import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';


const Control = styled.div`
background-color: transparent;
color: #033d19;
text-align: center;
padding-top: 1vw;
width: 4vw;
height: 4vw;
border-radius: 4vw;
`;
export default function Slider() {
  return (
    <Carousel dragging={true} speed={600} renderCenterLeftControls={({ previousSlide }) => (
      <Control onClick={previousSlide}>
        <ArrowLeft style={{fontSize:"3vw",fontWeight:"bolder"}}/>
      </Control>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <Control onClick={nextSlide}>
        <ArrowRight style={{fontSize:"3vw"}}/>
      </Control>
    )}
  >      
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt="img1"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="img2"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="img3"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt="img4"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt="img5"/>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt="img6"/>
    </Carousel>
  )
}