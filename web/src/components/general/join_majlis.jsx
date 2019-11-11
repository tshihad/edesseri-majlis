import React,{useEffect} from 'react'

export default function JoinMajlis(props){
  useEffect(() => {
    props.setLanButton(false)
    props.setState("JoinMajlis")
  }, [props])
  return(
    <div>Join Majlis</div>
  )
}