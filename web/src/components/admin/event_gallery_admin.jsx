import React, { useEffect } from 'react';
import Select from 'react-select';
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
  const [subcategory, setOptions] = React.useState('');
  const [deleted, setDeleted] = React.useState(false);
  const [miladOptions, setMiladOptions] = React.useState([2019,2020]);
  const [eidOptions, setEidOptions] = React.useState([]);
  const [iftarOptions, setIftarOptions] = React.useState([]);
  const [sportsOptions, setSportsOptions] = React.useState([]);
  const [meetandgreetOptions, setMeetAndGreetOptions] = React.useState([]);
  

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

  useEffect(()=>{
    axios.get(API_BASE_URL + '/majlis/admin/event-gallery/getOptions',
    { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
    .then(response =>{
      setMiladOptions(response.milad);
      setEidOptions(response.eid);
      setIftarOptions(response.iftar);
      setSportsOptions(response.sports);
      setMeetAndGreetOptions(response.meetandgreet)
    })
  },[])

  const deleteImg = (id) => {
    axios.delete(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category + '/' + id,
      { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
      .then(response => { alert("deleted successfully"); setDeleted(!deleted) })
      .catch(err => { console.log("network error", err) });
  }

  const handleImageChange = file => {
    var bodyFormData = new FormData();
    bodyFormData.append('upload_file', ...file);
    axios.post(API_BASE_URL + '/majlis/admin/event-gallery/' + props.category+'/'+subcategory.value, bodyFormData,
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

  const getOptions = (category) => {
    switch (category) {
      case "milad":
        return miladOptions.map(item =>({label:`${item}`,value:`${item}`}))
        case "eid":
        return eidOptions.map(item =>({label:`${item}`,value:`${item}`}))
        case "iftar":
        return iftarOptions.map(item =>({label:`${item}`,value:`${item}`}))
        case "sports":
        return sportsOptions.map(item =>({label:`${item}`,value:`${item}`}))
        case "meetandgreet":
        return meetandgreetOptions.map(item =>({label:`${item}`,value:`${item}`}))
        case "other":
        return "Other"
    }
  }
  return (
    <div>
      {canLoad === true ?
        <AdminGallery>
          <Headline>{getHeading(props.category)}</Headline>
            <span><Select options={getOptions(props.category)} 
            onChange={(e)=>setOptions(e)} value={subcategory}
            defaultValue={getOptions(props.category)[0]}/></span>
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