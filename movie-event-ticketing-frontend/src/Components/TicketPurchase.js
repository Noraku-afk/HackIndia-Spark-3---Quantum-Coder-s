import React, { useState } from 'react';

const TicketPurchase = ({ contract, web3, eventId, userAddress }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePurchase = async () => {
        try {
            const price = await contract.methods.events(eventId).call().price;
            await contract.methods.buyTicket(eventId, email).send({
                from: userAddress,
                value: web3.utils.toWei(price, 'ether'),
            });
            setMessage('Ticket purchased successfully!');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3>Purchase Ticket</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button onClick={handlePurchase} className="btn btn-primary mt-3">Buy Ticket</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default TicketPurchase;