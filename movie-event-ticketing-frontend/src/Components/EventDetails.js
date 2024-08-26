import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';

const EventDetails = ({ event }) => {
  return (
    <div className="event-details">
      <h2>{event.name}</h2>
      <p>Date: {new Date(event.date * 1000).toLocaleString()}</p>
      <p>Price: {event.price} ETH</p>
      
      <h3>Your Ticket QR Code:</h3>
      <QRCodeGenerator value={`ticket-${event.id}-${event.owner}`} />

      <button className="btn btn-primary">Download QR Code</button>
    </div>
  );
};

export default EventDetails;