import React,{useEffect} from 'react'

export default function JoinMajlis(props){
  useEffect(() => {
    props.setState("JoinMajlis")
  }, [props])
  return(
    <div>Join Majlis</div>
  )
}