import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyTickets = ({ contract, web3, userAddress }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const loadTickets = async () => {
            const userTickets = await contract.methods.getUserTickets(userAddress).call();
            setTickets(userTickets);
        };

        if (contract && userAddress) {
            loadTickets();
        }
    }, [contract, userAddress]);

    return (
        <div className="row">
            {tickets.map((ticket, index) => (
                <div key={index} className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Event: {ticket.eventId}</h5>
                            <p className="card-text">Ticket ID: {ticket.uniqueId}</p>
                            <p className="card-text">Owner: {ticket.owner}</p>
                            <Link to={`/ticket/${index}`} className="btn btn-primary">View Ticket</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyTickets;