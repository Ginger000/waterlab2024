import { storyblokEditable } from '@storyblok/react';

const Feature = ({ blok }) => (
    <div {...storyblokEditable(blok)} className="column feature">
        {blok.name}
        <h1>Hhahahahah</h1>
    </div>
);

export default Feature;
