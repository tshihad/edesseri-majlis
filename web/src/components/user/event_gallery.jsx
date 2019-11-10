import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery'

const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  useEffect(() => {
    props.setLanButton(false)
    props.setUser("user")
    props.setState("EventGallery")
  }, [props])
  return (
    <EventGalleryCard>
      {props.category === "milad" && <Gallery head="Milad" category="milad"/>}
      {props.category === "eid" && <Gallery head="Eid" category="eid"/>}
      {props.category === "iftar" && <Gallery head="Iftar" category="iftsr"/>}
      {props.category === "sports" && <Gallery head="Sports" category="sports"/>}
      {props.category === "meetandgreet" && <Gallery head="Meet And Greet" category="meet_and_greet"/>}
      {props.category === "other" && <Gallery head="Other" category="other"/>}
    </EventGalleryCard>
  )
}