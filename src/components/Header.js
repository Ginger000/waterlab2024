import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { storyblokEditable } from '@storyblok/react';

const Header = ({ content }) => {
    if (!content) {
        return <div>Loading header...</div>;
    }
    const headerBlock = content.body[0];
    console.log('header content is', headerBlock);

    return (
        <Navbar bg="light" expand="lg" {...storyblokEditable(headerBlock)}>
            <Navbar.Brand href="/">
                {headerBlock.logo && (
                    <img
                        src={headerBlock.logo.filename}
                        alt={headerBlock.logo.alt}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                )}{' '}
                {headerBlock.site_name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {headerBlock.sections.map((section, index) => (
                        <LinkContainer key={index} to={`/${section.link}`}>
                            <Nav.Link>{section.name}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
