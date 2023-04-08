import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='flex'>
            <div className='mt-10'>
                <div>
                    <h1 className='text-xl font-bold'>Location</h1>
                    <p>aaaaaaaaaa</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Phone</h1>
                    <p>0000000000</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Email</h1>
                    <p>xxxxxxxxxxx</p>
                </div>
            </div>
            <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3 rounded-xl   bg-slate-700   text-gray-100">
                <h1 className="text-2xl font-bold text-center">Send Message</h1>
                <form
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div className="space-y-1 text-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="abc@gmail.com"
                            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Your Phone Number"
                            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input
                            type="text"
                            name="msg"
                            id="msg"
                            placeholder="Start writing your message"
                            className="w-full h-40 px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        />
                    </div>

                    <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
                        Submit Message
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16   bg-gray-400 "></div>
                    <p className="px-3 text-sm   text-gray-400">
                        Login with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
                </div>
                <div className="flex justify-between space-x-4">

                </div>

            </div>
        </div>
    );
};

export default Contacts;