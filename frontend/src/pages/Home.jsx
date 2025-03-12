import React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Projects from '../components//Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;