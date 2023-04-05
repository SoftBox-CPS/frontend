import React, { FC } from 'react';
import AOS from 'aos';
import './HomePage.module.scss';
import MainInfo from 'pages/Home/components/MainInfo';
import ContactForm from 'pages/Home/components/ContactForm';
import RepresentationInfo from 'pages/Home/components/RepresentationInfo';

const HomePage: FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div className="layout">
      <RepresentationInfo />
      <MainInfo />
      <ContactForm />
    </div>
  );
};

export default HomePage;
