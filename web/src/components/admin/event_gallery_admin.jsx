import React, { useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { API_BASE_URL } from '../constants';
import AdminImageCard from '../sub_components/admin-imagecard';
import { DropzoneArea } from 'material-ui-dropzone';
import Loading from '../sub_components/loading'

const AdminGallery = styled.div`
margin: 5vh 10vw 0 10vw;
padding-bottem: 200px;`;
export default function ContactMajlisAdmin(props) {
  const [canLoad, setLoading] = React.useState(false)
  const [imgdata, setImgData] = React.useState([]);
  const [deleted, setDeleted] = React.useState(false);

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
    axios.delete(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category + '/' + id, {
      headers: {
        'Authorization': 'fc0f348a55cd4f499ca5fa40d515a993',
      }
    })
      .then(response => { console.log("deleted successfully"); setDeleted(!deleted) })
      .catch(err => { console.log("network error", err) });
  }

  const handleImageChange = file => {
    var bodyFormData = new FormData();
    bodyFormData.append('upload_file', ...file);
    axios.post('http://10.4.5.22:8081' + '/majlis/admin/event-gallery/' + props.category, bodyFormData,
      {
        headers: {
          'Authorization': 'fc0f348a55cd4f499ca5fa40d515a993',
          'Content-Type': 'multipart/form-data',
          'accept': 'application/json',
        }
      }
    )
      .then(response => { console.log("img added", response) })
      .catch(err => { console.log("network error", err) })
  }
  return (
    <div>
      {canLoad === true ?
        <AdminGallery>
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