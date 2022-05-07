import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Section from './components/section/Section';
import Main from './components/main/Main';
import Header from './components/header/HeaderSecond'

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
