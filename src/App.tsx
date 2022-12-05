import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Room from 'pages/Room';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'>
          <Route path='account'>
            <Route path='login' element={<h1>login</h1>} />
            <Route path='registration' element={<h1>registration</h1>} />

            <Route path='*' element={<Navigate to='login' replace />} />
          </Route>
          <Route path='about' element={<h1>About</h1>} />
          <Route path='contacts' element={<h1>Contacts</h1>} />
          <Route path='' element={<h1>Home</h1>} />
          <Route path='info' element={<h1>Info</h1>} />

          <Route path='room' element={<Room />} />

          <Route path='*' element={<Navigate to='home' replace />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
