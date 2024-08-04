import { storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ content }) => {
    if (!content) {
        return <div>Loading footer...</div>;
    }
    const { site_name, logo_1, logo_2, logo_3, email, mail, follows } = content;
    console.log('footer content is', content);
    const logos = [logo_1, logo_2, logo_3];

    return (
        <footer {...storyblokEditable(content)}>
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <div className="footer-section">
                            <h5>{site_name}</h5>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="footer-section">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.filename}
                                    alt={logo.alt || `Logo ${index + 1}`}
                                    className="footer-logo"
                                    style={{
                                        width: '100%',
                                        marginBottom: '10px',
                                    }}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <div className="footer-section">
                            <strong>Email:</strong>
                            <p>{email}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="footer-section">
                            <strong>Mailing Address</strong>
                            <p>{mail}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <div className="footer-section">
                            <strong>Follow us on Twitter</strong>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
