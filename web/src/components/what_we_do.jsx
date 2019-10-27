import React,{useEffect} from 'react'

export default function WhatWeDo(props){
  useEffect(() => {
    props.setState("WhatWeDo")
  }, [props])
  return(
    <div>What We Do</div>
  )
}