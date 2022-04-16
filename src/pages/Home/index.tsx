import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Apresentation from '../../sections/Apresentation';
import About from '../../sections/About';
import Speakers from '../../sections/Speakers';


const Home: React.FC = () => {
  return <Container>
    <Header/>
    <Apresentation/>
    <About/>
    <Speakers/>
  </Container>;
}

export default Home;