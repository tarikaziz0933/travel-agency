import React, { useEffect, useState } from 'react';
import ClientView from '../ClientView/ClientView';

const Client = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('client.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div>
            <h1>Our Clients</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    clients.map(client => <ClientView
                        key={client.id}
                        client={client}
                    ></ClientView>)
                }
            </div>
        </div>
    );
};

export default Client;