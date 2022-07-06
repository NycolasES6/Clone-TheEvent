import styled from 'styled-components';

export const Container = styled.div`
  color: var(--dark-blue);
  display: flex;
  padding: 10px 0;
  justify-content: center;
  border-bottom:1px solid var(--gray) ;
  width: 90vw;
  max-width: 700px;
  border-radius: 10px;

  transition: all .3s;
  &:hover{
    background-color: #EDE9FF;
  }
`;


export const Time = styled.p`
  font-size: 15pt;
  margin-right: 5px;
`

export const DayEvent = styled.div`
  display: flex;
`

export const Couch = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 0 10px;
`

export const Texts = styled.div``

export const Title = styled.p`
  font-size: 18pt;
  font-weight: 600;
`

export const Description = styled.p``
