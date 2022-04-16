import React from 'react';

import { Container, Title, Description, Line } from './styles';

interface TitleSectionProps{
  title:string,
  description:string,
}
const TitleSection: React.FC<TitleSectionProps> = (texts) => {
  return <Container>
    <Title>{texts.title}</Title>
    <Description>{texts.description}</Description>
    <Line/>
    </Container>;
}

export default TitleSection;