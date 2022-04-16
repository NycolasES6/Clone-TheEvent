import React from 'react';

import { Container, DarkBg, TextContainer, Title, Description, AboutTheEvent } from './styles';

const Apresentation: React.FC = () => {
  return <Container>
    <DarkBg>
        <TextContainer>
          <Title>
          THE ANNUAL<br/><span>MARKETING</span> CONFERENCE
          </Title>
          <Description>10-12 December, Downtown Conference Center, New York</Description>
        </TextContainer>
        <AboutTheEvent>
          About the event
        </AboutTheEvent>
    </DarkBg>
    </Container>;
}

export default Apresentation;