import React, { useEffect } from 'react'

export default function FamilyWelfare(props) {
  useEffect(() => {
    props.setUser("admin")
    props.setState("FamilyWelfare")
  }, [props])
  return (
    <div>FamilyWelfare</div>
  )
}