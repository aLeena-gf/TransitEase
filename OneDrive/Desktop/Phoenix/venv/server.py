import React from 'react';

const BusSchedule = ({ busScheduleData }) => {
  return (
    <div>
      <h2>Bus Schedule</h2>
      <p>{busScheduleData.bus_schedule}</p>
      {/* Render other bus schedule information as needed */}
    </div>
  );
};

export default BusSchedule;
