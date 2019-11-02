import React, { useEffect } from 'react';
import { TextField, Radio, Select, TextField_NoRequired } from './form_components/simple_text_field';
import styled from 'styled-components';
import '../styles/form.css'
const Form = styled.form`
width:100%;
padding:5%;
background-color:#f7fff6;
box-shadow: 6px 6px 28px 3px rgba(0,0,0,0.6);`;

const radioValues = ["Govt", "Semi-Govt", "Private", "Self-owned"];
const licenceValues = ["Light", "heavy", "Motor-Cycle", "others"]
const marriedValues = ["Yes", "No"]
const bloodGroupOptions = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "Other"];
export default function Admin(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("AddMember")
    })
    return (
        <form style={{ display: "block" }} >
            <TextField
                id="name"
                type="text"
                placeholder="Your Name"
                style="form-field"
            />
            <TextField
                id="house_name"
                type="text"
                placeholder="House Name"
                style="form-field"
            />
            <TextField
                id="father_name"
                type="text"
                placeholder="Father's Name"
                style="form-field"
            />

            <TextField
                id="ph_number_1"
                type="text"
                placeholder="Phone Number 1"
                style="form-field"
                pattern="^\+?[0-9]{11,12}$"
                title="Phone number format +920123456789"
            />
            <TextField_NoRequired
                id="ph_number_2"
                type="text"
                placeholder="Phone Number 2"
                style="form-field"
                pattern="^\+?[0-9]{11,12}$"
                title="Phone number format +920123456789"
            />

            <TextField_NoRequired
                id="office_number"
                type="text"
                placeholder="Office Number"
                style="form-field"
                pattern="^\+?[0-9]{11,12}$"
                title="Phone number format +920123456789"
            />
            <TextField_NoRequired
                id="home_number_uae"
                type="text"
                placeholder="Home Number (UAE)"
                style="form-field"
                pattern="^\+?[0-9]{11,12}$"
                title="Phone number format +920123456789"
            />
            <TextField
                id="email"
                type="email"
                placeholder="Your email"
                style="form-field"
                title="Please provide valid email id"
            />
            <Select
                id="blood_group"
                placeholder="Blood Group"
                style="form-field"
                values={bloodGroupOptions}
                title="Allowed values A+,B+,AB+,O+,A-,AB-,B-,O-"
            />
            <br />
            <TextField
                id="passpoer_no"
                type="text"
                placeholder="Passport number"
                style="form-field-1"
            />
            <TextField
                id="dob"
                type="date"
                placeholder="Date of birth"
                style="form-field-1"
            />
            <br />
            <TextField
                id="job"
                type="text"
                placeholder="Job"
                style="form-field"
            />
            <TextField
                id="company"
                type="text"
                placeholder="Company name"
                style="form-field"
            />
            <TextField_NoRequired
                id="post"
                type="text"
                placeholder="post code"
                style="form-field"
            />
            <TextField_NoRequired
                id="area"
                type="text"
                placeholder="Area"
                style="form-field"
            />
            <TextField_NoRequired
                id="emirates"
                type="text"
                placeholder="emirates"
                style="form-field"
            />
            <Radio
                id="institution"
                style="form-field"
                values={radioValues}
                label="Institution"
            />

            <TextField
                id="education"
                type="text"
                placeholder="Education"
                style="form-field-1"
            />
            <TextField
                id="job"
                type="text"
                placeholder="Job/Tech Qualification"
                style="form-field-1"
            />
            <Radio
                id="uae_licence"
                style="form-field-1"
                values={licenceValues}
                label="UAE Licence"
            />
            <TextField
                id="uae_residential"
                type="text"
                placeholder="UAE residential"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_area"
                type="text"
                placeholder="Area"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_building"
                type="text"
                placeholder="Building"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_flatno"
                type="text"
                placeholder="Fat/Room no"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_emirate"
                type="text"
                placeholder="Emirates"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_building"
                type="text"
                placeholder="Building"
                style="form-field-1"
            />
            <Radio
                id="married"
                style="form-field-1"
                values={marriedValues}
                label="Married"
            />
            <Radio
                id="family_near"
                style="form-field-1"
                values={marriedValues}
                label="Family living in UAE"
            />
            <TextField_NoRequired
                id="no_boys_children"
                type="number"
                placeholder="Number of Boys"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="no_girls_children"
                type="number"
                placeholder="Number of Girls"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_relative"
                type="text"
                placeholder="Closest relative in UAE"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="relative_ph"
                type="text"
                placeholder="Relative's phone"
                pattern="^\+?[0-9]{11,12}$"
                style="form-field-1"
            />
            <TextField_NoRequired
                id="uae_relatitionship"
                type="text"
                placeholder="Relationship"
                style="form-field-1"
            />
            <TextField
                id="home_addres"
                type="text"
                placeholder="Address (Home)"
                style="form-field"
            />
            <TextField
                id="home_place"
                type="text"
                placeholder="Place (Home)"
                style="form-field"
            />
            <TextField
                id="person_to_contact"
                type="text"
                placeholder="Person to contact (Home)"
                style="form-field"
            />
            <TextField
                id="person_to_contact_relationship"
                type="text"
                placeholder="Relationship"
                style="form-field"
            />
            <TextField
                id="home_number"
                type="text"
                placeholder="Relationship"
                style="form-field"
            />

            <TextField
                id="mahal_number"
                type="text"
                placeholder="Mahall membership Number"
                style="form-field-1"
            />
            <input type="submit" />
        </form>
    )
}