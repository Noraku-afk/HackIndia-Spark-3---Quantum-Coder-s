import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const createCoinbasePayment = async (amount, description) => {
        try {
            const response = await axios.post('https://api.commerce.coinbase.com/charges', {
                name: description,
                description: description,
                local_price: {
                    amount: amount,
                    currency: 'USD'
                },
                pricing_type: 'fixed_price'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CC-Api-Key': 'ea7006ef-3e6c-40b7-9b3b-5fb65c4c84d1'
                }
            });

            window.location.href = response.data.data.hosted_url;
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment initiation failed. Please try again.');
        }
    };

    const handleBuyTicket = async (event) => {
        const amount = event.price; // Example: Use event's price for BTC payment
        const description = `Ticket for ${event.name}`;
        await createCoinbasePayment(amount, description);
    };

    return (
        <div className="container">
            <h2>Events</h2>
            <div className="row">
                {events.map((event) => (
                    <div key={event.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p className="card-text">Date: {new Date(event.date * 1000).toLocaleString()}</p>
                                <p className="card-text">Price: {event.price} USD</p>
                                <Link to={`/event/${event.id}`} className="btn btn-primary">View Details</Link>
                                <button 
                                    onClick={() => handleBuyTicket(event)} 
                                    className="btn btn-success mt-2"
                                >
                                    Buy Ticket with BTC
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;