import React, { useEffect, useState } from 'react';
import EventList from '../Components/EventList';

const EventsPage = ({ contract, web3 }) => {
    return (
        <div className="container">
            <h2>Available Events</h2>
            <EventList contract={contract} web3={web3} />
        </div>
    );
};

export default EventsPage;