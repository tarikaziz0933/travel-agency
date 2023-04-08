import React from 'react';
import image from '../../images/image-56.jpg'
import icon1 from '../../images/f-icon-1.png'
import icon2 from '../../images/f-icon-2.png'

const TravelMore = () => {
    return (
        <div className='flex container mt-10 bg-sky-200'>
            <div className='mr-5'>
                <img src={image} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-bold m-7'>We Make Your Travel More Enjoyable</h1>
                    <p className='mb-5'>Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.</p>
                </div>
                <div className='flex gap-4'>
                    <div className='flex'>
                        <img src={icon1} alt="" />
                        <h3 className='text-xl font-semibold'>Award winning tour & travel arranger</h3>
                    </div>
                    <div className='flex'>
                        <img src={icon2} alt="" />
                        <h3 className='text-xl font-semibold'>Most popular booking solution provider</h3>
                    </div>
                </div>
                <div>
                    <ol className='text text-left mt-4'>
                        <li className='mb-2 bg-sky-800 text-white'>Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum.</li>
                        <li className='mb-2 bg-sky-800 text-white'>Excepteur sint occaecat cupidatat non proiden serunt mollit.</li>
                        <li className='mb-2 bg-sky-800 text-white'>Keccaecat cupidatat non proiden serunt mollit.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default TravelMore;