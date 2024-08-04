import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function StoryblokPage({ component: Component }) {
    const location = useLocation();
    let slug =
        location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

    const story = useStoryblok(slug, { version: 'draft' });
    if (!story || !story.content) {
        return <div>Loading...</div>;
    }

    return <Component content={story.content} />;
}

function App() {
    let slug =
        window.location.pathname === '/'
            ? 'home'
            : window.location.pathname.replace('/', '');

    console.log(slug);

    const story = useStoryblok(slug, { version: 'draft' });
    if (!story || !story.content) {
        return <div>Loading...</div>;
    }

    return <StoryblokComponent blok={story.content} />;
}
export default App;
