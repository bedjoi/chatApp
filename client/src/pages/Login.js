import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function LoginPage() {
  return (
    <div className='App'>
        <div className='cardLogin'>
            <p className='login'>Login</p>
            <div className='formLogCard'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
              <div >
                <p className="text-center">
                  Dont have an account? <Link to="/register">Signup</Link>
                </p>


              </div>
         </Form>  
            </div>
         </div>

    </div>
  )
}
