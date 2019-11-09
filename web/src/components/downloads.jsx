import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  Paper,
  CardMedia,
  Button
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import pdfImage from '../images/icons/pdf-icon.png'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '3%'
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    borderColor: "yellow !important",
  },
  margin: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  avatar: {
    margin: 20,
    width: 60,
    height: 60,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const DownloadMainCard = styled.div`
margin: 2% 10vw;
`;
export default function Downloads(props) {
  const [documents, setDocuments] = React.useState([{updatedAt:"b"}])
  useEffect(() => {
    props.setState("Downloads")
    axios.get("http://10.4.5.22:8080/majlis/downloads")
    .then(({data})=>{
      data.result.map((element)=>{
        element.UpdatedAt = element.UpdatedAt.slice(0,10)
      })
      setDocuments(data.result)
    })
  }, [props])
  return (
    <DownloadMainCard>
      {documents.map((document)=>(
        <DownloadCard title={document.Title} description={document.Description} updatedAt={document.UpdatedAt} downloadLink={document.Location} />
      ))}
    </DownloadMainCard>
  )
}

const Card = styled.div`
margin-bottom: 1.5%
`;
export function DownloadCard(props) {
  const classes = useStyles()
  const handleButtonClick = () => {
    alert("downloading.....")
  }
  return (
    <Card>
      <Paper style={{backgroundColor:"#f2f7f1e0"}}>
        <Grid container spacing={3} >
          <Grid item xs={1} alignItems="center" justify="center">
            <CardMedia
              className={classes.avatar}
              image={pdfImage}
              style={{ verticalAlign: "center" }}
            />
          </Grid>
          <Grid item xs={11} alignItems="center">
            <Grid container spacing={0}>
              <Grid xs={10} style={{ marginLeft: '3%' }}>
                <p style={{ fontSize: "1.2em" }}>
                  <b>
                    {props.title}
                  </b>
                </p>
                <p>
                  {props.description}
                  <div style={{ fontSize: ".7em", lineHeight: "2em",fontWeight:"600"}}>
                  uploaded date: {props.updatedAt}
                  </div>
                </p>
                    
              </Grid>
              <Grid item xs={1} >
                <div style={{ marginTop: "35px" }}>
                <Button variant="outlined" size="medium" onClick={handleButtonClick} color="primary" className={classes.margin}
                 id="download" style={{ backgroundColor: "#556b2f", color: "white" }}>
                  Download</Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Card>
  )
}
