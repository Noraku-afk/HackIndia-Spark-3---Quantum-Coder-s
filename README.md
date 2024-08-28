TicketChain : A Decentralized Movie and Event Ticketing System

Overview

This project is a comprehensive Web3-based ticketing system designed to handle movie and event ticket sales using blockchain technology. It leverages Ethereum smart contracts for ticket management and integrates Bitcoin payment through Coinbase Commerce for a decentralized payment solution. The system allows users to purchase tickets, transfer ownership, and verify tickets using QR codes, all while maintaining a sleek user interface.

Features

	Ticket Purchase: Users can buy tickets for events using Bitcoin via Coinbase Commerce.
	Ticket Ownership: Tickets are represented as NFTs (ERC721 tokens) on the Ethereum blockchain, allowing users to transfer ownership.
         Purchase Limits: Each user can purchase a maximum of 3 tickets per event.
	Email Notifications: Users receive ticket information and QR codes via email upon successful purchase.
	Event Management: Administrators can create and list events with details such as date, time, and price.

Tech Stack

	Frontend: React for building the user interface, Axios for API requests.
	Backend: Node.js with Express for serving API endpoints and handling ticketing logic.
	Blockchain: Ethereum smart contracts (ERC721) for managing ticket ownership, Truffle for smart contract development, and Ganache for local blockchain simulation.
	Payment Integration: Coinbase Commerce for Bitcoin payments.
	Email Service: Nodemailer for sending ticket details and QR codes to users.
