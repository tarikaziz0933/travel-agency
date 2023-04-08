import React from 'react';

const TravelStory = (props) => {
    const { image_url, name, story, designation } = props.review;
    return (
        <div className='mt-10 bg-lime-300 p-2'>
            <p className='mb-3'>{story}</p>
            <div className='flex justify-center'>
                <img src={image_url} alt="" />
                <div className='ml-3'>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TravelStory;