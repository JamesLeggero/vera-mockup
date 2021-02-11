import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
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
    <>
      <h4> To learn more about the Vera Institute and its initiatives, please sign up for our mailing list</h4>
    <Container className='w-50'>
      
      <Form onSubmit={handleSubmit}> 
      <Form.Group controlId="formBasicName">
          <Form.Label className='formLabel'>First Name</Form.Label>
          <Form.Control className='formInput' type="text" name='firstName' placeholder="Enter first name" onChange={handleUserInput}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='formLabel'>Email Address</Form.Label>
          <Form.Control className='formInput' type="email" name='email' placeholder="Enter email" onChange={handleUserInput}/>
        </Form.Group>
        <Form.Group controlId="formBasicZip">
          <Form.Label className='formLabel'>Zip Code</Form.Label>
          <Form.Control className='formInput' type="text" name='zip' placeholder="Enter zip code" onChange={handleUserInput}/>
        </Form.Group>

        
        {/* <Button className='formButton'  type="submit">
          Submit
        </Button> */}
        <div className='submit-and-confirmation'>
        <input type='submit' className='formButton' value ='Submit' />
        <h6 className='confirmation'>You have successfully signed up for our mailing list - thank you!</h6>
        </div>
      </Form>
    </Container>
    </>
  );
}
