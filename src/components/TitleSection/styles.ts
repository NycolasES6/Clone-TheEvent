import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 30pt;
  text-transform: uppercase;
  color:var(--dark-blue);
`

export const Description = styled.p`
  color: var(--gray);
  font-size: 15pt;
  margin-bottom: 10px;
`

export const Line = styled.hr`
  border: 2px solid var(--pink);
  width: 150px;
`
