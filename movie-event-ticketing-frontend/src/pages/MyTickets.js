import React, { useEffect, useState } from 'react';
import MyTickets from '../Components/MyTickets';


const MyTicketsPage = ({ contract, web3, userAddress }) => {
    return (
        <div className="container">
            <h2>My Tickets</h2>
            <MyTickets contract={contract} web3={web3} userAddress={userAddress} />
        </div>
    );
};

export default MyTicketsPage;