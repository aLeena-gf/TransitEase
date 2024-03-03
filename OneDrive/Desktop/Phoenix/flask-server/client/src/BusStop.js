import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import BusSchedule from './BusSchedule';

const BusStop = () => {
  const [routeData, setRouteData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setRouteData(data);
      setIsScanning(false);
      // ... rest of your code
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      {routeData ? (
        <BusSchedule routeData={routeData} />
      ) : (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      )}
    </div>
  );
};

export default BusStop;
