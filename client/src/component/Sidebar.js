import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Sidebar() {
  return (
    <div>
      <Card className="sideCard">
        <img></img>

        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card className="sideCard">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card className="sideCard">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card className="sideCard">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card className="sideCard">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>

    </div>
  )
}
