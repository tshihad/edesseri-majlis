import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchField from '../sub_components/search'
const Members = styled.div`
width: 100%;
display: inline-block;
margin-top: 2%;
`;

const Heading = styled.h2`
width:50%;
color:#088d35;
margin: 2.5%
display: inline;
`;
const Member = styled.div`
border: 0;
outline: 0;
padding-left: 2.5%;
font-size: 1.3vw;
width: 46%;
margin: 1% 2%;
height: 10vh;
background-color: #edf8f1;
display: inline-block;
border-radius: .5vh;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

const Head = styled.div`
height:8vh;
padding: 1.3vh;
`;

const Select = styled.select`
padding: .495%;
float: right;
`;
const Option = styled.option`
`;

export default function Subscriptions(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("Subscriptions")
    })
    return (
        <Members>
            <Head >
                <Heading>Subscriptions</Heading>
                <SearchField />
                <Select>
                    <Option value="MemberID">Member ID</Option>
                    <Option value="MemberName">Member Name</Option>
                </Select>
            </Head>
            <div>
                <Subscriber slno="1." name="wasim" status="PAID" />
                <Subscriber slno="2." name="wasim" status="PAY" />
                <Subscriber slno="3." name="wasim" status="PAY" />
                <Subscriber slno="4." name="wasim" status="PAID" />
                <Subscriber slno="5." name="wasim" status="PAY" />
                <Subscriber slno="6." name="wasim" status="PAID" />
                <Subscriber slno="7." name="wasim" status="PAID" />
                <Subscriber slno="8." name="wasim" status="PAID" />
                <Subscriber slno="9." name="wasim" status="PAY" />
            </div>

        </Members>
    )
}


const SlNo = styled.div`
display: inline-block;
font-weight: 500;
float: left;
padding-top: 3.5vh;
`;
const Name = styled.div`
display: inline-block;
font-weight: 500;
float: left;
padding: 3.5vh 0 0 1vw;
`;
const Button = styled.button`
border: 0
outline: 0;
float: right;
color: white;
width: 8vw;
border-radius: .5vh;
margin: 1.7vh;
padding: 2vh;
`;
function Subscriber(props) {
    const [payStatus, setStatus] = React.useState(props.status);
    const toggleStatus = () => {
        const status = payStatus === "PAY" ? "PAID" : "PAY"
        setStatus(status)
    }
    return (
        <Member>
            <SlNo>{props.slno} </SlNo>
            <Name>{props.name}</Name>
            <Button style={{ backgroundColor: payStatus === "PAID" ? "#00752b" : "#830b02" }} onClick={toggleStatus}>{payStatus}</Button>
        </Member>
    )
}