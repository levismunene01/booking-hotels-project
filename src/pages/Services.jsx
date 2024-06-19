import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components for styling

function Services() {
    return (
        <Container className="py-4">
            <h1 className="text-center mb-4">Our Services</h1>

            <Row>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Accommodation</Card.Title>
                            <Card.Text>
                                Explore our luxurious rooms and suites designed to provide comfort and relaxation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Food & Beverage</Card.Title>
                            <Card.Text>
                                Indulge in exquisite dining experiences with our range of restaurants and bars.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Concierge</Card.Title>
                            <Card.Text>
                                Let our concierge assist you with tour bookings, reservations, and more.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Add more service cards as needed */}
            </Row>
        </Container>
    );
}

export default Services;
