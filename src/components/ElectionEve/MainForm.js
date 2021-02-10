import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./MainForm.css";

export default function MainForm() {

  const [user, setUser] = useState({
    firstName: '',
    email: '',
    zip: ''
  })

  

  const handleUserInput = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      if (user.firstName.length > 1 && user.email.length > 1) {
        await setUser({
          firstName: '',
          email: '',
          zip: ''
        })
        
        await console.log(`${user.firstName}, ${user.email}, ${user.zip}`)
        event.target.reset()
      } else {
        console.log('user field or email is too short')
      }
      
      
      
      

      
    } catch (error) {
      console.error(error)
      
    }
  }

  return (
    <Container className='w-75'>
      <Form onSubmit={handleSubmit}> 
      <Form.Group controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='firstName' placeholder="Enter first name" onChange={handleUserInput}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleUserInput}/>
        </Form.Group>
        <Form.Group controlId="formBasicZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" name='zip' placeholder="Enter zip code" onChange={handleUserInput}/>
        </Form.Group>

        
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
