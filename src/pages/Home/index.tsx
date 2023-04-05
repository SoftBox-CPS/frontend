import React, { FC } from 'react';
import AOS from 'aos';
import './Home-page.module.scss';
import MainInfo from 'pages/Home/components/Main-info';
import ContactForm from 'pages/Home/components/Contact-form';
import RepresentationInfo from 'pages/Home/components/Representation-info';

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
