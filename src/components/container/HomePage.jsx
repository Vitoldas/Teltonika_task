import React from 'react';
import './container.scss';
import Header from '../header/Header';
import CreateUser from '../createUser/CreateUser';
import Footer from '../footer/Footer';
export const HomePage = () => {
  return (
    <div>
      <Header />
      <CreateUser />
      <Footer />
    </div>
  );
};
