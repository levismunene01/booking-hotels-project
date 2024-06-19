import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="social-icons mr-md-auto">
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
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center justify-content-md-end">
            <p className="text-center text-md-right">
              Thank you for choosing us! We appreciate your booking and look forward to welcoming you.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
