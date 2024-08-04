import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './components/Page';
import Teaser from './components/Teaser';
import Grid from './components/Grid';
import Feature from './components/Feature';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Design1 from './designs/Design1';
import Design2 from './designs/Design2';

storyblokInit({
    accessToken: 'gHdyKSFHyoJFv1XABcVPkQtt',
    use: [apiPlugin],
    components: {
        // page: Page,
        teaser: Teaser,
        grid: Grid,
        feature: Feature,
        // header: Header,
        // footer: Footer,
        // home: Home,
        design1: Design1,
        design2: Design2,
    },
    apiOptions: {
        // for spaces located in the US or China:
        // region: "us" or "cn", // you need to specify the region
        region: 'us',
    },
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
