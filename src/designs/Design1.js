import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Design1 = ({ blok }) => {
    console.log('Design1 block is ', blok);
    return <div {...storyblokEditable(blok)}>This is design 1 hahahahah</div>;
};

export default Design1;
