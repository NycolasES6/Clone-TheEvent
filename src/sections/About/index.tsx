import React from 'react';
import { Container, DarkBg, TextContainer, Title, Description } from './styles';

const About: React.FC = () => {
  return <Container>
  <DarkBg>
    <TextContainer>
      <Title>ABOUT THE EVENT</Title>
      <Description>
      Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in est ut optio sequi unde.
      </Description>
    </TextContainer>

    <TextContainer>
      <Title>WHERE</Title>
      <Description>
      Downtown Conference Center, New York
      </Description>
    </TextContainer>

    <TextContainer>
      <Title>WHEN</Title>
      <Description>
      Monday to Wednesday 10-12 December
      </Description>
    </TextContainer>
  </DarkBg>
  </Container>;
}

export default About;