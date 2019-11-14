import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'



const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  const [canLoad, setLoading] = React.useState(false)
  useEffect(() => {
    if (localStorage.getItem('VerifiedUser')) {
      setLoading(true)
    } else {
      axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
        repsonse => {
          if (repsonse.status != 200) {
            window.location = "/MemberLogin"
          }
        }
      ).catch(error => {
        window.location = "/MemberLogin"
        alert("Authentication Failed")
      })
    }
    setLoading(true)
    props.setLanButton(false)
    props.setUser("user")
    props.setState("EventGallery")
  }, [props])
  return (
    <div>
      {canLoad === true ?
        <EventGalleryCard>
          {props.category === "milad" && <Gallery head="Milad" category="milad" />}
          {props.category === "eid" && <Gallery head="Eid" category="eid" />}
          {props.category === "iftar" && <Gallery head="Iftar" category="iftar" />}
          {props.category === "sports" && <Gallery head="Sports" category="sports" />}
          {props.category === "meetandgreet" && <Gallery head="Meet And Greet" category="meet_and_greet" />}
          {props.category === "other" && <Gallery head="Other" category="other" />}
        </EventGalleryCard>
        : <Loading />}</div>
  )
}