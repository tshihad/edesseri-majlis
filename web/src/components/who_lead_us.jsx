import React,{useEffect} from 'react'

export default function WhoLeadUs(props){
  useEffect(() => {
    props.setState("WhoLeadUs")
  }, [props])
  return(
    <div>Who Lead Us</div>
  )
}