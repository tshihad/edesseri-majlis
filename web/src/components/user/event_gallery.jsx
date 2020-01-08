import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading';
import MediaQuery from 'react-responsive';
import { reach } from 'yup';
import Select from 'react-select';



const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  const [category, setCategory] = React.useState()
  const [selectedOption, setOption] = React.useState()

  const [canLoad, setLoading] = React.useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
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
  }, [props,category])

  const options = [
    { value: 'milad', label: 'Milad' },
    { value: 'eid', label: 'Eid' },
    { value: 'iftar', label: 'Iftar' },
    { value: 'sports', label: 'Sports' },
    { value: 'meetandgreet', label: 'Meet And Greet' },
    { value: 'other', label: 'Other' },
  ];
  
  const handleChange = (selectedOption) => {
    setCategory(selectedOption.value)
    window.location = selectedOption.value
  }
  return (
    <div>
      {canLoad === true ?
        <div>
        <MediaQuery minDeviceWidth={700}>
          <EventGalleryCard>
            {props.category === "milad" && <Gallery head="Milad" category="milad" />}
            {props.category === "eid" && <Gallery head="Eid" category="eid" />}
            {props.category === "iftar" && <Gallery head="Iftar" category="iftar" />}
            {props.category === "sports" && <Gallery head="Sports" category="sports" />}
            {props.category === "meetandgreet" && <Gallery head="Meet And Greet" category="meet_and_greet" />}
            {props.category === "other" && <Gallery head="Other" category="other" />}
          </EventGalleryCard>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={700}>
          <EventGalleryCard>
            <Select
              defaultValue="fghd"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              styles={{backgroundColor:"black"}}
            />
            {category === "milad" && <Gallery head="Milad" category="milad" />}
            {category === "eid" && <Gallery head="Eid" category="eid" />}
            {category === "iftar" && <Gallery head="Iftar" category="iftar" />}
            {category === "sports" && <Gallery head="Sports" category="sports" />}
            {category === "meetandgreet" && <Gallery head="Meet And Greet" category="meet_and_greet" />}
            {category === "other" && <Gallery head="Other" category="other" />}
          </EventGalleryCard>
        </MediaQuery>
      </div>
        : <Loading />}</div>
  )
}