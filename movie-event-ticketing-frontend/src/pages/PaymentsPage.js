import React, { useState } from 'react';

const PaymentPage = () => {
    const [btcAddress, setBtcAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        try {
            // Logic to initiate BTC payment (e.g., via third-party API)
            setMessage('Payment successful!');
        } catch (error) {
            setMessage(`Payment failed: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h2>BTC Payment</h2>
            <input
                type="text"
                value={btcAddress}
                onChange={(e) => setBtcAddress(e.target.value)}
                placeholder="Enter BTC Wallet Address"
                className="form-control mb-3"
                required
            />
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="form-control mb-3"
                required
            />
            <button onClick={handlePayment} className="btn btn-primary">Pay with BTC</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PaymentPage;