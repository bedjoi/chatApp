import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Navigation from '../component/Navigation';
import Sidebar from '../component/Sidebar';
import Body from '../component/Body';
import Online from '../component/Online';

export default function ChatPage() {
  return (
      <Container fluid >
        <Row style={{height: '88.5vh'}}>
          <Col xs="3" className='h-100 sidebStyle'><Sidebar /></Col>
          <Col xs="7" className='bg-success p-2 text-dark bg-opacity-25 msgBody'><Body /></Col>
          <Col xs="2" className='h-100 sidebStyle'><Online /></Col>

        </Row>
    </Container>
  )
}
