import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value }) => {
  return (
    <div className="qr-code-container">
      <QRCode value={value} size={256} level={"H"} includeMargin={true} />
    </div>
  );
};

export default QRCodeGenerator;