import React, { useEffect } from 'react'
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Table from '../sub_components/simple_table';
import Loading from '../sub_components/loading';
import styled from 'styled-components'

const ConatctmajlisCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;
const EventColumns = [
    {
        id: 'first_name',
        label: 'First Name',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'last_name',
        label: 'Last Name',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'email',
        label: 'email',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'phone',
        label: 'Phone Number',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'place',
        label: 'Place',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'country',
        label: 'Country',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'content',
        label: 'Content',
        align: 'center',
        minWidth: 150
    }
]
export default function ContactMajlisAdmin(props) {
    const [rows, setrows] = React.useState([]);
    const [canLoad, setLoading] = React.useState(false)
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
        setLoading(true)
        axios.get(API_BASE_URL + '/majlis/admin/contact-majlis', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
            .then(({ data }) => {
                data.result.map((row) => {
                    return row
                })
                setrows(data.result)
            }).catch((err) => {
                alert("server Error")
            })
        props.setUser("admin")
        props.setState("ContactMajlisAdmin")
    }, [])
    return (
        <div>
            {canLoad === true ?
                <ConatctmajlisCard>
                    <Table tablename='Contact Majlis' columns={EventColumns} rows={rows} />
                </ConatctmajlisCard>
                : <Loading />}</div>
    )
}