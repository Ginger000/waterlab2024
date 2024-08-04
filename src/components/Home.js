import React from 'react';
import { storyblokEditable, renderRichText } from '@storyblok/react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import '../css/Home.css';

const Home = ({ content }) => {
    if (!content) {
        return <div>Loading...</div>;
    }

    console.log('home content is ', content.body[0]);

    // const homeBlock = content.body.find(
    //     (block) => block.component === 'Landing page'
    // );

    // console.log('home block is ', JSON.stringify(homeBlock));

    const homeBlock = content.body[0];

    const createMarkup = (richTextContent) => {
        console.log('rich text Content:', richTextContent);
        const renderedContent = renderRichText(richTextContent);
        console.log('Rendered Content:', renderedContent);
        const cleanHTML = DOMPurify.sanitize(renderedContent);
        return { __html: cleanHTML };
    };

    return (
        <div className="home-container" {...storyblokEditable(homeBlock)}>
            <div className="video-background">
                <iframe
                    // width="1280"
                    // height="720"
                    src={`${homeBlock.video[0].link}?autoplay=1&mute=1&controls=0&loop=1&playlist=${homeBlock.video[0].link}`}
                    title="Background Video"
                    frameBorder="0"
                    allow="autoplay"
                    style={{ display: 'none' }}
                ></iframe>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                >
                    <source src={homeBlock.video[0].link} type="video/mp4" />
                </video>
            </div>
            <div className="overlay">
                <div className="left-block">
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            homeBlock.text_block_left[0].title
                        )}
                    />
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            homeBlock.text_block_left[0].text
                        )}
                    />
                </div>
                <div className="right-block">
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            homeBlock.text_block_right[0].title
                        )}
                    />
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            homeBlock.text_block_right[0].text
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
