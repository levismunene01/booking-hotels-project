import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h3>THE SAFARI COLLECTION</h3>
            <p>Through our unique collection of spectacular properties, online shop and Footprint Trust, we unite sustainable tourism with wildlife conservation and communities making a difference to top people and planet</p>
          </Col>
          <Col md={4}>
            <h5>Properties</h5>
            {/* <ul>
              <li>
                <a href="#">Iraffa Manor</a>
              </li>
              <li>
                <a href="#">Rasaab</a>
              </li>
              <li>
                <a href="#">Sala's Camp</a>
              </li>
              <li>
                <a href="#">Foilio Lodge</a>
              </li>
              <li>
                <a href="#">The Retreat</a>
              </li>
              <li>
                <a href="#">Giraffe Manor Shop</a>
              </li>
            </ul> */}
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            {/* <ul>
              <li>
                <a href="#">info@thesafaricollection.com</a>
              </li>
              <li>
                <a href="#">+254 706 111 111</a>
              </li>
            </ul> */}
            <br />
            {/* <a href="#">Footprint</a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
