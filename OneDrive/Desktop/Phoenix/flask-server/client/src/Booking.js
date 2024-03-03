import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import BusSchedule from './BusSchedule'; 

const BusStop = () => {
  const [routeData, setRouteData] = useState(null); 
  const [isScanning, setIsScanning] = useState(false); 

  const handleScan = (data) => {
    setRouteData(data);
    setIsScanning(false);
  };

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => handleScan("your_route_data"), 2000);
  };

  return (
    <div>
      {isScanning ? (
        <p>Scanning QR code...</p>
      ) : (
        <>
          <QRCode value={routeData || "Scan the QR code at your bus stop"} size={256} level="H" />
          <button onClick={startScan}>Scan QR Code</button>
        </>
      )}
      {routeData && <BusSchedule routeData={routeData} />} 
    </div>
  );
};

export default BusStop;
