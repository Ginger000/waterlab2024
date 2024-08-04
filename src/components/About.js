import React from 'react';
import { StoryblokComponent } from '@storyblok/react';

const About = ({ content }) => {
    return (
        <div>
            <h1>About Page</h1>
            <StoryblokComponent blok={content} />
        </div>
    );
};

export default About;
