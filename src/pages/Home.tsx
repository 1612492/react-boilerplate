import { FC, useState } from 'react';

import { Banner, Body, Footer, Header, Navbar } from 'layouts';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
