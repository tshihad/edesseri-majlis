import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/simple_table';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'


const EventCalendarCard = styled.div`
margin: 2vh 10vw 0 10vw;
@media(max-width: 700px){
  margin: 0;
}
`;

const EventColumns = [
  {
    id: 'EventDate',
    label: 'Event Date',
    align: 'center',
    minWidth: 90
  },
  {
    id: 'Title',
    label: 'Event Title',
    align: 'center',
    minWidth: 120
  },
  {
    id: 'Description',
    label: 'Description',
    align: 'center',
    minWidth: 200
  }]
export default function EventCalendar(props) {
  const [rows, setrows] = React.useState([])
  const toStdDate = (date) => {
    var year = date.slice(0, 4)
    var month = date.slice(5, 7)
    var day = date.slice(8, 10)
    return day + "-" + month + "-" + year
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(API_BASE_URL + "/majlis/event-calendar")
      .then(({ data }) => {
        data.result.map((row) => {
          row.EventDate = toStdDate(row.EventDate)
        })
        setrows(data.result)
      }).catch((err) => {
        console.log(err)
      })
  }, []);

  return (
        <EventCalendarCard>
          <Table tablename='Event List' columns={EventColumns} rows={rows} />
        </EventCalendarCard>
  )
}