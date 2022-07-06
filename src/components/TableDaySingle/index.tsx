import React from 'react';

import { Container, Time, DayEvent, Couch, Texts, Title, Description } from './styles';

interface infoProps{
  time:string
  title:string
  description:string
  imgSrc:string
}

const TableDaySingle: React.FC<infoProps> = (data) => {
  return <Container>
    <Time>
      {data.time}
    </Time>

    <DayEvent>
      <Couch src={data.imgSrc}/>
      <Texts>
        <Title>
          {data.title}
        </Title>
        <Description>
          {data.description}
        </Description>
      </Texts>
    </DayEvent>
  </Container>;
}

export default TableDaySingle;