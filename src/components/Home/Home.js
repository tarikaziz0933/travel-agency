import React, { useEffect, useState } from 'react';
import DestinationView from '../DestinationView/DestinationView';
import KitView from '../KitView/KitView';
import TravelMore from '../TravelMore/TravelMore';
import TravelPack from '../TravelPack/TravelPack';
import TravelStory from '../TravelStory/TravelStory';

const Home = () => {
    const [kits, setKits] = useState([]);
    const [travels, setTravels] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('tourKit.json')
            .then(res => res.json())
            .then(data => setKits(data))
    }, [])

    useEffect(() => {
        fetch('travelPack.json')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, [])

    useEffect(() => {
        fetch('popularDestination.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    useEffect(() => {
        fetch('travelStory.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <section>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold text-center'>Explore the Top Destination of Planet Earth</h1>
                    <p className='text-center'>Aliqua enim ad minim veniam, quis nostrut dolore magna aliqu inim veniam, quis nostrud.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        kits.map(kit => <KitView
                            key={kit.id}
                            kit={kit}
                        ></KitView>)
                    }
                </div>
            </section>
            <section>
                <div>
                    <TravelMore></TravelMore>
                </div>
            </section>
            <section>
                <div className='mt-10'>
                    <h1 className='text-xl font-bold text-center'>Travel Package</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        travels.map(travel => <TravelPack
                            key={travel.key}
                            travel={travel}
                        ></TravelPack>)
                    }
                </div>
            </section>
            <section>
                <div>
                    <h1 className='text-xl font-bold text-center'>Popular Destination</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        destinations.map(destination => <DestinationView
                            key={destination.key}
                            destination={destination}
                        ></DestinationView>)

                    }
                </div>
            </section>
            <section>
                <div>
                    <h1 className='text-xl font-bold text-center'>Travel Story</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                            reviews.map(review => <TravelStory
                                key={review.key}
                                review={review}
                            ></TravelStory>)

                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;