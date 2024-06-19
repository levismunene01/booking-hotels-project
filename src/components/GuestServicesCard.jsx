// GuestServicesCard.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function GuestServicesCard() {
  return (
    <Card className="my-4">
      <Card.Header>Guest Services</Card.Header>
      <Card.Body>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col className="text-center">
            <i className="fa-solid fa-baby-carriage fa-2x"></i>
            <Card.Text>Baby Sitting</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-concierge-bell fa-2x"></i>
            <Card.Text>Concierge</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-wifi fa-2x"></i>
            <Card.Text>High Speed Internet</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-washer fa-2x"></i>
            <Card.Text>Laundry Services</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-wheelchair fa-2x"></i>
            <Card.Text>Wheelchair Accessibility</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-money-bill-wave fa-2x"></i>
            <Card.Text>Currency Exchange</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-gift fa-2x"></i>
            <Card.Text>Gift Shop</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-briefcase-medical fa-2x"></i>
            <Card.Text>Medical Services</Card.Text>
          </Col>
          <Col className="text-center">
            <i className="fa-solid fa-room-service fa-2x"></i>
            <Card.Text>Room Service</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-center">
        <a href="/services">SEE ALL SERVICES</a>
      </Card.Footer>
    </Card>
  );
}

export default GuestServicesCard;
