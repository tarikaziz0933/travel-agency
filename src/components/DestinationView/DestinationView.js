import React from 'react';

const DestinationView = (props) => {
    const { image_url, title, details } = props.destination;
    return (
        <div className='image-full gap-4'>
            <img src={image_url} alt="" placeholder={title} />
            <h2 className='text-xl font-bold'>{title}</h2>
            <p>{details}</p>
        </div>
    );
};

export default DestinationView;