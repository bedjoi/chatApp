import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../component/Sidebar';
import Body from '../component/Body';

export default function Contacts() {
  return (
    <div>
      <Container fluid >
      <Row style={{height: '88.5vh'}}>
          <Col xs="3" className='h-100 sidebStyle'><Sidebar /></Col>
          <Col xs="9" className='bg-success p-2 text-dark bg-opacity-25'><Body /></Col>

        </Row>
    </Container>
    </div>
  )
}
