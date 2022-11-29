import React from 'react'
import { Col, Container, Form, Row, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./homepage.css";

export default function HomePage() {
  return (
    <Container>
        <Row>
            <Col md={5} className="homepage__bg">
            </Col>
            
            <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
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
                 
            </Col>


        </Row>  


    </Container>
  )
}
