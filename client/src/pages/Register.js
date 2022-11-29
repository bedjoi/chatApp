
import React, { useState } from "react";
import { Col, Container, Form, Row, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';



export default function RegisterPage() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const Submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/user/login', { method: 'POST', 
    body:
    { name:name,
      email:email,
      password:password
    } 
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  return (
    <Container>
        
        <Row>
            <Col md={5} className="homepage__bg">
            </Col>
            
            <Col md={7} className="d-grid align-items-center justify-content-center">
            <Form onSubmit={Submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder=" Your name" onChange={(e)=> setName(e.target.value)} value={name} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <div >
                <p className="text-center">
                  You have an account? <Link to="/">LogIn</Link>
                </p>


              </div>
              </Form>
              
            </Col>


        </Row>  


    </Container>
    
           
  )
}