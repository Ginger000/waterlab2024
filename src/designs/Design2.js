import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Design2 = ({ blok }) => (
    <div {...storyblokEditable(blok)}>This is design 2 lalalalal</div>
);

export default Design2;
