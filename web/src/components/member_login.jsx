import React,{useEffect} from 'react'

export default function MemberLogin(props){
  useEffect(() => {
    props.setState("MemberLogin")
  }, [props])
  return(
    <div>Member Login</div>
  )
}