import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Body() {
  return (
    <div >
        <Form className="d-flex">
            <Form.Control
              type="input"
              placeholder="tap text"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>

    </div>

  )
}
