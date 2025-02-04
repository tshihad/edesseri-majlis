import React, { useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { API_BASE_URL } from '../constants';
import AdminImageCard from '../sub_components/admin-imagecard';
import { DropzoneArea } from 'material-ui-dropzone';
import Loading from '../sub_components/loading';
import Dropdown from 'react-dropdown';


const AdminGallery = styled.div`
margin: 5vh 10vw 0 10vw;
padding-bottem: 200px;`;
export default function ContactMajlisAdmin(props) {
  const [canLoad, setLoading] = React.useState(false)
  const [imgdata, setImgData] = React.useState([]);
  const [deleted, setDeleted] = React.useState(false);
  const getDefaultSubCategoey = (category) => {
    switch (category) {
      case "milad":
        return "All"
      case "eid":
        return "All"
      case "iftar":
        return "All"
      case "sports":
        return "All"
      case "meetandgreet":
        return "All"
      case "other":
        return "All"
    }
  }
  const [subCategory, setSubCategory] = React.useState(getDefaultSubCategoey(props.category))

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(API_BASE_URL + '/majlis/auth/admin', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
      repsonse => {
        if (repsonse.status != 200) {
          window.location = "/Admin/Login"
        }
      }
    ).catch(error => {
      window.location = "/Admin/Login"
      alert("Authentication Failed")
    })
    axios.get(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category,
      { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
      .then(response => { console.log(response); setImgData(response.data.result) })
      .catch(err => console.log("network error", err));
    setLoading(true)

    props.setUser("admin")
    props.setState("EventGalleryAdmin")
  }, [props, deleted])

  const deleteImg = (id) => {
    axios.delete(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category + '/' + id,
      { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
      .then(response => { alert("deleted successfully"); setDeleted(!deleted) })
      .catch(err => { console.log("network error", err) });
  }

  const handleImageChange = file => {
    var bodyFormData = new FormData();
    bodyFormData.append('upload_file', ...file);
    axios.post(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category, bodyFormData,
      {
        headers: {
          'Authorization': localStorage.getItem('EdasseryMajlisToken'),
          'Content-Type': 'multipart/form-data',
          'accept': 'application/json',
        }
      }
    )
      .then(response => { console.log("img added", response) })
      .catch(err => { console.log("network error", err) })
  }
  const Headline = styled.h1`
color:#1d4219;
font-size: 1.7em;
font-family: 'Comfortaa', cursive;
`;
  const SubCategory = styled.div`
color:#1d4219;
margin-top: 2vh;
font-size: 1.2em;
font-family: 'Comfortaa', cursive;
`;
  const options = [
    // { value: 'milad', label: '2020' },
    // { value: 'eid', label: '2019' },
    // { value: 'iftar', label: '2018' },
    // { value: 'sports', label: '2017' },
    // { value: 'meetandgreet', label: '2016' },
    // { value: 'other', label: 'Other' },
  ];
  const handleChange = (selectedOption) => {
    setSubCategory(selectedOption.label)
    alert(props.category + selectedOption.label)
  }
  const getHeading = (category) => {
    switch (category) {
      case "milad":
        return "Milad"
      case "eid":
        return "Eid"
      case "iftar":
        return "Iftar"
      case "sports":
        return "Sports"
      case "meetandgreet":
        return "Meet And Greet"
      case "other":
        return "Other"
    }
  }

  return (
    <div>
      {canLoad === true ?
        <AdminGallery>
          <Grid container>
            <Grid item xs={8}>
              <Headline>{getHeading(props.category)}</Headline>
            </Grid>
            <Grid item xs={4}>
              <SubCategory><Dropdown
                options={options}
                onChange={handleChange}
                value={subCategory}
              /></SubCategory>
            </Grid>

          </Grid>
          <Grid container spacing={0} justify="center">
            <DropzoneArea id="file" onChange={handleImageChange} showPreviewsInDropzone={false} />
          </Grid>
          <Grid container spacing={0} justify="center">
            {
              imgdata && imgdata.map(imgData => {
                return (
                  <Grid item xs={3}>
                    <Grid container spacing={0} justify="center">
                      <AdminImageCard image={imgData.PhotoLocaltion} deleteImg={deleteImg}
                        id={imgData.ID} />
                    </Grid>
                  </Grid>
                )
              })
            }
          </Grid>
        </AdminGallery>
        : <Loading />}</div>
  )
}