import React, { useEffect } from 'react';
import styled from 'styled-components';

const Members = styled.div`
width: 100%;
display: inline-block;
`;

const Heading = styled.h2`
color:#088d35;
padding-left: 2.5%;
`;
const Member = styled.button`
border: 0;
outline: 0;
padding-left: 2.5%;
font-size: 1.3vw;
width: 46%;
margin: 1% 2%;
height:10vh;
background-color: #f7fff6;
display: inline-block;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;


export default function Subscriptions(props) {
    useEffect(() => {
        props.setUser("admin")
    })
    return (
        <Members>
            <Heading>Subscriptions</Heading>
            <Subscriber slno="1." name="wasim" status="PAID"/>
            <Subscriber slno="1." name="wasim" status="PAY"/>
            <Subscriber slno="1." name="wasim" status="PAY"/>
            <Subscriber slno="1." name="wasim" status="PAID"/>
            <Subscriber slno="1." name="wasim" status="PAY"/>
            <Subscriber slno="1." name="wasim" status="PAID"/>
            <Subscriber slno="1." name="wasim" status="PAID"/>
            <Subscriber slno="1." name="wasim" status="PAID"/>
            <Subscriber slno="1." name="wasim" status="PAY"/>
        </Members>
    )
}


const SlNo = styled.div`
display: inline-block;
font-weight: 500;
float: left;

`;
const Name = styled.div`
display: inline-block;
font-weight: 500;
float: left;
padding-left: 1vw;
`;
const Button = styled.button`
border: 0
outline: 0;
float: right;
width: 8vw;
padding: 1vh;
`;
function Subscriber(props) {
    const [payStatus,setStatus] = React.useState(props.status);
    const toggleStatus = () =>{
        setStatus(payStatus === "PAY" ? "PAID" : "PAY ")
    }
    return (
        <Member>
            <SlNo>{props.slno} </SlNo>
            <Name>{props.name}</Name>
            <Button onclick={toggleStatus}>{payStatus}</Button>
        </Member>
    )
}