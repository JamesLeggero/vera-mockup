import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import VeraImage from '../logos/Vera_Hor_White_800px.png'

export default function Navigation() {

    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/vera-mockup">
      <img
        alt=""
        src={VeraImage}
        
        height="30"
        className="d-inline-block align-top"
      />
      
    </Navbar.Brand>
  </Navbar>
</>

    )
}