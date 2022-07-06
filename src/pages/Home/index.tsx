import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Apresentation from '../../sections/Apresentation';
import About from '../../sections/About';
import Speakers from '../../sections/Speakers';
import Schedule from '../../sections/Schedule';

const Home: React.FC = () => {
  return <Container>
    <Header/>
    <Apresentation/>
    <About/>
    <Speakers/>
    <Schedule/>
  </Container>;
}

export default Home;