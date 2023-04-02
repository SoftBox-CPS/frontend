import React, { FC } from 'react';
import './Home-page.module.scss';
import MainInfo from 'pages/Home/components/Main-info';
import ContactForm from 'pages/Home/components/Contact-form';
import RepresentationInfo from 'pages/Home/components/Representation-info';

const HomePage: FC = () => {
  return (
    <div className="layout">
      <RepresentationInfo />
      <MainInfo />
      <ContactForm />
    </div>
  );
};

export default HomePage;
