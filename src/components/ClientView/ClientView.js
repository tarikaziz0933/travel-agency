import React from 'react';

const ClientView = (props) => {
    const { image_url, name, designation, story } = props.client;
    return (
        <div className='image-full gap-4'>
            <img src={image_url} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>{designation}</p>
            <p>{story}</p>
        </div>
    );
};

export default ClientView;