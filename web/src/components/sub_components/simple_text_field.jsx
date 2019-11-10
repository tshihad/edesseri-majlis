import React from 'react';
import { createPropertySignature } from 'typescript';

export function TextField(props) {
  return (
    <div className={props.style}>
      <label style={{ display: "inline", marginLeft: "2%" }}>{props.placeholder}: </label>
      <input style={{ display: "inline", marginRight: "2%", float: "right" }} id={props.id}
        required
        type={props.type}
        title={props.title}
        placeholder={props.placeholder}
        pattern={props.pattern}
      />

    </div>
  )
}
export function TextField_NoRequired(props){
  return(
    <div className={props.style}>
    <label style={{ display: "inline", marginLeft: "2%" }}>{props.placeholder}: </label>
    <input style={{ display: "inline", marginRight: "2%", float: "right" }} id={props.id}
      type={props.type}
      title={props.title}
      placeholder={props.placeholder}
      pattern={props.pattern}
    />

  </div>
  )
}
export function Select(props) {
  return (
    <div className={props.style}>
      <label>blood group</label>
      <select name="blood group" id={props.id} style={{ display: "inline", marginRight: "2%", float: "right" }}>
        <option></option>
      {props.values.map((option) => (
        <option value={option}> {option}</option>
      ))}
      </select>
      </div>
  )
}

export function Radio(props) {
  return (
    <div className={props.style}>
      <label>{props.label}</label>
      <div>
        {props.values.map((option) => (
          <span>
            <input required type="radio" name="hi" value={option} /> <span>{option}</span>
          </span>
        ))}
      </div>
    </div>
  )
}