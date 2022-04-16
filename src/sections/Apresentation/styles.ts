import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/assets/hero-bg.jpg');
  background-position: center center;
  background-size: cover;

  height: 100vh;
`;

export const DarkBg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(19, 17, 27, .75);
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size:40pt;
  span{
    color: var(--pink);
  }
`

export const Description = styled.p`
  margin-top: 15px;
  font-size: 15pt;
`

// About The Event
export const AboutTheEvent = styled.a`
  font-size:15pt;
  border: 2px solid var(--pink);
  padding:10px 20px;
  border-radius: 45px;
  margin-top: 50px;
  transition: .3s;
  :hover{
    background-color:var(--pink);
    cursor: pointer;
    }
`