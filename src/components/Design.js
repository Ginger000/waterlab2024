import { storyblokEditable } from '@storyblok/react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Design.css';
// const Design = ({ blok }) => {
//     //return <div {...storyblokEditable(blok)}>{blok.site_name}</div>;
//     return <div>Design</div>;
// };

const Design = ({ content }) => {
    console.log('Design content:', content);
    const navigate = useNavigate();

    const handleCardClick = (slug) => {
        navigate(`/designs/${slug}`);
    };

    return (
        <Container className="custom-container">
            <Row>
                {content.body.map((blok, index) => (
                    <Col key={blok._uid} xs={12} sm={6} md={4} className="mb-4">
                        <Card
                            className="design-card"
                            {...storyblokEditable(blok)}
                            onClick={() => handleCardClick(blok.slug)}
                        >
                            <Card.Img
                                variant="top"
                                src={blok.image.filename}
                                alt={blok.image.alt || ''}
                                className="design-card-img"
                            />
                            <Card.Body className="text-center">
                                <Card.Title className="design-card-title">
                                    {blok.title.content[0].content[0].text}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Design;
