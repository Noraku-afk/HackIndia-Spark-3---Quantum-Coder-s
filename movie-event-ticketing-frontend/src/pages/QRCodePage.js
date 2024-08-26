import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = ({ contract, ticketId }) => {
    const [qrCode, setQrCode] = useState('');

    const generateQRCode = async () => {
        try {
            const qr = await contract.methods.getQRCode(ticketId).call();
            setQrCode(qr);
        } catch (error) {
            console.error("Failed to generate QR code", error);
        }
    };

    return (
        <div className="container">
            <h2>QR Code for Ticket Verification</h2>
            <button onClick={generateQRCode} className="btn btn-primary mb-3">Generate QR Code</button>
            {qrCode && <QRCode value={qrCode} />}
        </div>
    );
};

export default QRCodePage;