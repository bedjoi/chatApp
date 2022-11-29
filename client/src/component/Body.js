import React from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Body() {
  return (
    <div >
        <Form >
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Your message" ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="success">
                            Send<i className="fa-solid fa-paper-plane-top"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>

    </div>

  )
}
