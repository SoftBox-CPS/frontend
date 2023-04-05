import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Room from 'pages/Room';
import LoginPage from 'pages/Login';
import RegistrationPage from 'pages/Registration';
import HomePage from 'pages/Home';
import Profile from 'pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/'>
          <Route path='' element={<HomePage />}/>
          
          <Route path='about' element={<h3>About</h3>} />
          <Route path='contacts' element={<h3>Contacts</h3>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='registration' element={<RegistrationPage/>} />
          <Route path='info' element={<h3>Info</h3>} />

          <Route path='room' element={<Room />} />
          <Route path='Account' element={<Profile />} />

          <Route path='*' element={<Navigate to='home' replace />} />
        </Route>
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
