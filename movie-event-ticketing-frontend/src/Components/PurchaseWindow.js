// src/Components/PurchaseWindow.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseWindow = ({ contract, web3, userAddress }) => {
    const { eventId } = useParams();
    const [numTickets, setNumTickets] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleTicketChange = (e) => {
        const value = e.target.value;
        setNumTickets(value);
        // Assuming the price is fetched from the contract
        const eventPrice = 0.1; // Replace with actual price fetch logic
        setTotalPrice(value * eventPrice);
    };

    const handlePurchase = async () => {
        if (numTickets > 3) {
            alert("You can only purchase up to 3 tickets.");
            return;
        }

        try {
            // Call the smart contract function to purchase tickets
            await contract.methods.buyTickets(eventId, numTickets).send({
                from: userAddress,
                value: web3.utils.toWei(totalPrice.toString(), 'ether'),
            });
            alert("Tickets purchased successfully!");
        } catch (error) {
            console.error("Purchase failed:", error);
            alert("Purchase failed. Please try again.");
        }
    };

    return (
        <div className="purchase-window">
            <h3>Purchase Tickets</h3>
            <label>
                Number of Tickets:
                <input type="number" value={numTickets} onChange={handleTicketChange} min="1" max="3" />
            </label>
            <p>Total Price: {totalPrice} ETH</p>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

export default PurchaseWindow;