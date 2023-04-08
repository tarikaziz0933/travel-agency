import React from 'react';

const KitView = (props) => {
    const { image_url, title, details } = props.kit;
    return (
        <div>
            <div className='flex justify-center'>
                <img src={image_url} alt="" />
            </div>
            <h2 className='text-xl '>{title}</h2>
            <p>{details}</p>
        </div>
    );
};

export default KitView;