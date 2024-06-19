import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={4}>
            {/* Content for the first column */}
          </Col>
          <Col md={4}>
            {/* Content for the second column */}
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <div className="social-icons">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-facebook">Facebook</Tooltip>}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-twitter">Twitter</Tooltip>}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-instagram">Instagram</Tooltip>}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-linkedin">LinkedIn</Tooltip>}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-pinterest">Pinterest</Tooltip>}
              >
                <FontAwesomeIcon icon={faPinterest} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-youtube">YouTube</Tooltip>}
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icon" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" className="social-icon" />
              </OverlayTrigger>
              <p className="mt-3">
              Thank you for choosing us! We appreciate your booking and look forward to welcoming you.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
