import React from 'react';
import TitleSection from '../../components/TitleSection';
import Speaker from '../../components/SpeakerSingle'

import { Container, SpeakersContainer } from './styles';

const Speakers: React.FC = () => {
  return <Container>
    <TitleSection title="EVENT SPEAKERS" description="Here are some of our speakers" />

    <SpeakersContainer>
      <Speaker spk={0}/>
      <Speaker spk={1}/>
      <Speaker spk={2}/>
      <Speaker spk={3}/>
      <Speaker spk={4}/>
      <Speaker spk={5}/>
    </SpeakersContainer>
  </Container>;
}

export default Speakers;