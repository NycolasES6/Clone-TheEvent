import styled from 'styled-components';

export const Container = styled.div`
  z-index: 0;
  background-image: url('/assets/about-bg.jpg');
  background-position:center center;
  background-size: cover;
  background-attachment: fixed;
  height: 200px;
`;

export const DarkBg = styled.div`
  background-color:rgba(19, 17, 27, .8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content:space-between;
  padding: 20px;
`

export const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 40%;
`

export const Title = styled.p`
  font-size:17pt;
  font-weight: bold;
`

export const Description = styled.p`
  font-size:13pt;
`
