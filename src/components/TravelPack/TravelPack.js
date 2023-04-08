import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TravelPack = (props) => {
    console.log(props);
    const { image_url, title, details, total_view, ratings, price, } = props.travel;
    return (
        <div
            className=" bg-orange-500 my-4 shadow-xl hover:shadow-2xl  flex flex-col justify-between"
        >
            <div>
                <div className="h-64 cursor-zoom-in hover:mask-heart mask">
                    <img src={image_url} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="mx-3">
                    <h2 className="text-xl font-bold my-3 text-white">
                        {title}
                    </h2>
                    <p className="text-white">
                        {details}
                    </p>
                </div>
            </div>
            <div className='flex justify-between p-2'>
                <p className="text-slate-300">
                    Start From: {price}
                </p>
                <p className="text-slate-300">
                    Ratings: {ratings}
                </p>
                <p className="text-slate-300">
                    Views: {total_view}
                </p>
            </div>
            <Link to=''>
                <button className="m-3 btn btn-outline btn-warning  rounded-none">
                    Add To Cart
                </button>
            </Link>
        </div>
    );
};

export default TravelPack;