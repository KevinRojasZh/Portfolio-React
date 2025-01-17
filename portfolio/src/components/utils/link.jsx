import React from 'react';


export const Link = ({text, link, Icon}) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        {<Icon/>} {text}
    </a>
);