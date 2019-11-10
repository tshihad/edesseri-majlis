import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery'

const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  useEffect(() => {
    props.setLanButton(false)
    props.setState("EventGallery")
  }, [props])
  return (
    <EventGalleryCard>
      {props.category === "milad" && <Gallery head="Milad"/>}
      {props.category === "eid" && <Gallery head="Eid"/>}
      {props.category === "iftar" && <Gallery head="Iftar"/>}
      {props.category === "sports" && <Gallery head="Sports"/>}
      {props.category === "meetandgreet" && <Gallery head="Meet And Greet"/>}
      {props.category === "other" && <Gallery head="Other"/>}
    </EventGalleryCard>
  )
}