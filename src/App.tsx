import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Room from 'pages/Room';
import LoginPage from 'pages/Login';
import RegistrationPage from 'pages/Registration';
import HomePage from 'pages/Home';
import Profile from 'pages/Profile';
import Rooms from 'pages/Rooms';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/'>          
          <Route path='About' element={<HomePage />} />
          <Route path='Contacts' element={<h3>Contacts</h3>} />
          <Route path='Login' element={<LoginPage/>} />
          <Route path='Registration' element={<RegistrationPage/>} />
          <Route path='Info' element={<h3>Info</h3>} />

          <Route path='Rooms' element={<Rooms />} />
          <Route path='Room' element={<Room />} />
          
          <Route path='Account' element={<Profile />} />
          <Route path='' element={<Navigate to='/About' replace />} />
        </Route>
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
