import React, { useEffect } from 'react'

export default function Loans(props) {
  useEffect(() => {
    props.setState("Loans")
    props.setUser("admin")
  }, [props])
  return (
    <div>Loans</div>
  )
}