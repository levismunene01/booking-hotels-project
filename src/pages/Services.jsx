import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Spa & Wellness</Card.Title>
                            <Card.Text>
                                Relax and rejuvenate with our spa treatments and wellness facilities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Event Planning</Card.Title>
                            <Card.Text>
                                Plan your special events with our dedicated event planning services.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Business Center</Card.Title>
                            <Card.Text>
                                Access our fully-equipped business center for your professional needs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Fitness Center</Card.Title>
                            <Card.Text>
                                Stay fit during your stay with our state-of-the-art fitness center.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Swimming Pool</Card.Title>
                            <Card.Text>
                                Enjoy a refreshing swim in our outdoor or indoor swimming pools.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Room Service</Card.Title>
                            <Card.Text>
                                Order from our extensive room service menu at any time of day.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Transportation</Card.Title>
                            <Card.Text>
                                Arrange airport transfers and local transportation services with ease.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
