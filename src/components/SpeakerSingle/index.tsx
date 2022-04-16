import React from 'react';

import { Container, Legend } from './styles';

const speakersInfo = [
  {
    name:"Brenden Legros",
    description:"Quas alias incidunt",
    imgSrc:'assets/speakers/1.jpg'
  },
  {
    name:"Hubert Hirthe",
    description:"Consequuntur odio aut",
    imgSrc:'assets/speakers/2.jpg'
  },
  {
    name:"Cole Emmerich",
    description:"Fugiat laborum et",
    imgSrc:'assets/speakers/3.jpg'
  },
  {
    name:"Jack Christiansen",
    description:"Debitis iure vero",
    imgSrc:'assets/speakers/4.jpg'
  },
  {
    name:"Alejandrin Littel",
    description:"Qui molestiae natus",
    imgSrc:'assets/speakers/5.jpg'
  },
  {
    name:"Willow Trantow",
    description:"Non autem dicta",
    imgSrc:'assets/speakers/6.jpg'
  }
]

interface spkProps{
  spk:number
}
const SpeakerSingle: React.FC<spkProps> = ({spk}) => {
  return <Container bg={speakersInfo[spk].imgSrc}>
    <Legend>
      <h1>{speakersInfo[spk].name}</h1>
      <p>{speakersInfo[spk].description}</p>
    </Legend>
  </Container>
    ;
}

export default SpeakerSingle;