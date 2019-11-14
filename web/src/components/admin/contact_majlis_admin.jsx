import React, { useEffect } from 'react'
import Table from '../sub_components/simple_table';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

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
        id: 'phone_number',
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
        minWidth: 50
    }   
]

export default function ContactMajlisAdmin(props) {
    const [rows, setrows] = React.useState([]);

    useEffect(() => {
        props.setUser("admin")
        props.setState("ContactMajlisAdmin")

        axios.get(API_BASE_URL+'/majlis/admin/contactmajlis')
        .then(({ data }) => {
            data.result.map((row)=>{
                return row
            })
            setrows(data.result)
        }).catch((err)=>{
            alert(err)
        })
    }, [props])

    return (
        <div>
            <Table tablename='Contact Majlis' columns={EventColumns} rows={rows} />
        </div>
    )
}