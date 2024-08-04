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
import About from './components/About';
import Design from './components/Design';
import Research from './components/Research';
import Class from './components/Class';
import News from './components/News';
import DesignDetail from './components/DesignDetail';

function StoryblokPage({ component: Component }) {
    const location = useLocation();
    let slug =
        location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

    console.log('Current Slug:', slug); // Debugging log

    const story = useStoryblok(slug, { version: 'draft' });

    console.log('Story Content:', story); // Debugging log

    if (!story || !story.content) {
        return <div>Loading...</div>;
    }

    return <Component content={story.content} />;
}

function App() {
    const headerStory = useStoryblok('header', { version: 'draft' });
    const footerStory = useStoryblok('footer', { version: 'draft' });
    const homeStory = useStoryblok('home', { version: 'draft' });
    const designStory = useStoryblok('design', { version: 'draft' });

    console.log('header story is', headerStory);
    if (
        !headerStory ||
        !headerStory.content ||
        !footerStory ||
        !footerStory.content ||
        !homeStory ||
        !homeStory.content
    ) {
        return <div>Loading...</div>;
    }

    const footerBlock = footerStory.content.body.find(
        (block) => block.component === 'footer'
    );

    const homeBlock = headerStory.content.body.find(
        (block) => block.component === 'Landing page'
    );

    console.log('homestory content is ', homeStory.content);

    console.log('home lllblock is', homeBlock);

    //console.log('design story is ', designStory);

    return (
        <Router>
            {/* <Header content={headerBlock} /> */}
            <Header content={headerStory.content} />
            <Routes>
                <Route
                    path="/"
                    element={<Home content={homeStory.content} />}
                />
                <Route
                    path="/about"
                    element={<StoryblokPage component={About} />}
                />
                <Route
                    path="/design"
                    element={<StoryblokPage component={Design} />}
                />
                <Route path="/designs/:slug" element={<DesignDetail />} />
                <Route
                    path="/research"
                    element={<StoryblokPage component={Research} />}
                />
                <Route
                    path="/class"
                    element={<StoryblokPage component={Class} />}
                />
                <Route
                    path="/news"
                    element={<StoryblokPage component={News} />}
                />
                <Route
                    path="/contact"
                    element={<StoryblokPage component={Home} />}
                />
                {/* Add more routes as needed */}
            </Routes>
            <Footer content={footerBlock} />
        </Router>
    );
}

export default App;
