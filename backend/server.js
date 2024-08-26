const express = require('express');
const QRCode = require('qrcode');

const app = express();

app.get('/generate-qr/:id', async (req, res) => {
    try {
        const qr = await QRCode.toDataURL(req.params.id);
        res.json({ qr });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));