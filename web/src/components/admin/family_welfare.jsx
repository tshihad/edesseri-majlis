import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import * as Yup from 'yup';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Schema from './family_welfare_schema';
import Collection from './family_welfare_collection' 

const SubscriptionCard = styled.div`
margin: 5vh 10vw 0 10vw;`;
const Headline = styled.h1`
color:#1d4219;
font-size: 1.7em;
font-family: 'Comfortaa', cursive;
`;
export default function Subscriptions(props) {
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

        props.setUser("admin")
        props.setState("FamilyWelfare")
    })
    const onSearchchange = ()=>{

    }
    const YearRegExp = /^[0-9]{4}$/;
    var FormReset
    const tab = {
        fontSize: "1.3em",
        color: "#1d4219",
        padding: ".5em 1.5em",
        fontWeight: 600,
    }
    return (
        <div>
            {canLoad === true ?
                <SubscriptionCard>
                    <Tabs>
                        <TabList>
                            <Tab style={tab}>Schema</Tab>
                            <Tab style={tab}>Collection</Tab>
                        </TabList>

                        <TabPanel>
                            <Schema/>
                        </TabPanel>
                        <TabPanel>
                           <Collection/>
                        </TabPanel>
                    </Tabs>

                </SubscriptionCard>
                : <Loading />}</div>
    )
}