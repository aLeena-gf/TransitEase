// src/BusSchedule.js
import React from 'react';

const BusSchedule = ({ routeData }) => {
  const busScheduleData = {
    route: routeData,
    stops: [
      { stopName: 'Stop 1', arrivalTime: '10:00 AM' },
      { stopName: 'Stop 2', arrivalTime: '10:30 AM' },
      { stopName: 'Stop 3', arrivalTime: '11:00 AM' },
    ],
  };

  return (
    <div>
      <h2>Bus Schedule</h2>
      <p>Route: {busScheduleData.route}</p>
      <ul>
        {busScheduleData.stops.map((stop, index) => (
          <li key={index}>
            {stop.stopName} - {stop.arrivalTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusSchedule;
