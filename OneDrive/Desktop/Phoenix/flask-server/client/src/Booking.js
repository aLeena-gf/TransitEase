import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import BusSchedule from './BusSchedule'; // Import the BusSchedule component

const BusStop = () => {
  const [routeData, setRouteData] = useState(null); // Stores the scanned route data
  const [isScanning, setIsScanning] = useState(false); // Flag for scanning state

  // Simulate QR code scanning (replace with actual scanning functionality)
  const handleScan = (data) => {
    setRouteData(data);
    setIsScanning(false);
  };

  // Simulate initiating scan (replace with actual scanner integration)
  const startScan = () => {
    setIsScanning(true);
    // Simulate scanning for 2 seconds and then trigger handleScan
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
      {routeData && <BusSchedule routeData={routeData} />} {/* Render BusSchedule component */}
    </div>
  );
};

export default BusStop;
