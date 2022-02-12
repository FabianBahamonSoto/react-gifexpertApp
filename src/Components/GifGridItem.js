import React from 'react';

export const GifGridItem = ({id, title, url}) => 
{
    // console.log('IMG: ', url);
    return (
        <div className='card animate__animated animate__bounce animate__delay-2s'>
            <title>{ title }</title>
            <img
                src={ url }
                alt={ title }
            />
        </div>
    )
}
