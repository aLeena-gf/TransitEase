// src/App.js

import React from 'react';
import Login1 from './Login1';
import Booking from './Booking';
import BusStop from './BusStop';  // Import the BusStop component

function App() {
  return (
    <div>
      {/* Other components */}
      <Login1 />
      <Booking />
      <BusStop /> {/* Include the BusStop component */}
    </div>
  );
}

export default App;
