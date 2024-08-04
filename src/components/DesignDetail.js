import React from 'react';
import { useParams } from 'react-router-dom';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import { storyblokEditable } from '@storyblok/react';

const DesignDetail = () => {
    const { slug } = useParams();
    const story = useStoryblok(`designs/${slug}`, { version: 'draft' });

    console.log('detail story is ', story);

    if (!story || !story.content) {
        return <div>Loading...</div>;
    }

    return (
        <div {...storyblokEditable(story.content)}>
            <h1>{story.content.title}</h1>
            {story.content.body.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
        </div>
    );
};

export default DesignDetail;
