import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ contract, web3 }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            const eventCount = await contract.methods.events.length.call();
            let eventsArray = [];
            for (let i = 0; i < eventCount; i++) {
                const event = await contract.methods.events(i).call();
                eventsArray.push(event);
            }
            setEvents(eventsArray);
        };

        if (contract) {
            loadEvents();
        }
    }, [contract]);

    return (
        <div className="row">
            {events.map((event, index) => (
                <div key={index} className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{event.name}</h5>
                            <p className="card-text">Date: {new Date(event.date * 1000).toLocaleString()}</p>
                            <p className="card-text">Price: {web3.utils.fromWei(event.price, "ether")} ETH</p>
                            <Link to={`/event/${index}`} className="btn btn-primary">Buy Ticket</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;