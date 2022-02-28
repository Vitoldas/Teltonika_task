import React from 'react';
import './homePage.scss';
import Header from '../../atoms/header/Header';
import CreateUser from '../../molecules/createUser/CreateUser';
import Footer from '../../atoms/footer/Footer';
export const HomePage = () => {
  return (
    <div>
      <Header />
      <CreateUser />
      <Footer />
    </div>
  );
};
