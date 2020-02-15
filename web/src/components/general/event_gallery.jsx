import React, { useEffect } from 'react';
import styled from 'styled-components';
import Gallery from '../sub_components/gallery';
import MediaQuery from 'react-responsive';
import Dropdown from 'react-dropdown';


const EventGalleryCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;

export default function EventGallery(props) {
  const [category, setCategory] = React.useState()
  const [selectedOption, setOption] = React.useState()

  useEffect(() => {
    props.setLanButton(false)
    props.setState("EventGallery")
    window.scrollTo(0, 0)
    setCategory(props.category)
  }, [props, category])
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
      <MediaQuery minDeviceWidth={701}>
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
          <Dropdown
            options={options}
            onChange={handleChange}
            value={props.category}
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
  )
}