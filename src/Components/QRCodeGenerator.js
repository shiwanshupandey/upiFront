// QRCodeGenerator.jsx
import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator({ data }) {
  return <QRCode value={JSON.stringify(data)} />;
}

export default QRCodeGenerator;
