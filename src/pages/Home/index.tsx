import React, { FC } from 'react';
import './Home.module.scss';
import MainInfo from '../../components/Main-info';
import ContactForm from '../../components/Contact-form';
import RepresentationInfo from '../../components/Representation-info';

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
