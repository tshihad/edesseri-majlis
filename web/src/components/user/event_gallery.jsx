import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery'

const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("EventGallery")
  }, [props])
  return (
    <EventGalleryCard>
      <Gallery/>
    </EventGalleryCard>
  )
}