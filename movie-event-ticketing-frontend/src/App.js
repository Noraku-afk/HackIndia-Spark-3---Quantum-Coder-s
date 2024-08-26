import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import TicketingContract from './contracts/Ticketing.sol/Ticketing.json';
import Navbar from './Components/Navbar';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import MyTicketsPage from './pages/MyTickets';
import PaymentPage from './pages/PaymentsPage';
import QRCodePage from './pages/QRCodePage';

const App = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [userAddress, setUserAddress] = useState('');

    useEffect(() => {
        const initWeb3 = async () => {
            const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
            setWeb3(web3);
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = TicketingContract.networks[networkId];
            const contractInstance = new web3.eth.Contract(
                TicketingContract.abi,
                deployedNetwork && deployedNetwork.address,
            );
            setContract(contractInstance);
            const accounts = await web3.eth.getAccounts();
            setUserAddress(accounts[0]);
        };
        initWeb3();
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage contract={contract} web3={web3} />} />
                <Route path="/my-tickets" element={<MyTicketsPage contract={contract} web3={web3} userAddress={userAddress} />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/qr/:ticketId" element={<QRCodePage contract={contract} />} />
            </Routes>
        </Router>
    );
};

export default App;