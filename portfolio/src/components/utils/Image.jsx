import React from 'react';

export const Image = ({src,alt,className})=> (
    <figure>
        <img src={src} alt={alt} className={className}/>
    </figure>
)