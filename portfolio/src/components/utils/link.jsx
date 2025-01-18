import React from 'react';

export const Link = ({text ='', link, key ,Icon}) => (
    <a href={link} key={key} target="_blank" rel="noopener noreferrer">
        {<Icon/>} {text}
    </a>
);