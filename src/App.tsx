import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Room from 'pages/Room';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route path='home' element={<h1>Home</h1>} />
          <Route path='room' element={<Room />} />

          <Route path='*' element={<Navigate to='home' replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
