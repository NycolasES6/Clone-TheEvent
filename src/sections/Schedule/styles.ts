import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Days = styled.div`
  display: flex;
  justify-content: center;
`

export const Day = styled.div`
  border-radius: 25px;
  margin: 0 5px;
  padding: 10px 100px;

  display: flex;
  align-items: center;

  background-color:var(--dark-blue);

  font-size: 15pt;
  font-weight: 500;

  transition: .4s;
  cursor: pointer;
  &.is{
    background-color:var(--pink);
  }
`
export const DescriptionDays = styled.div`
  color: var(--dark-blue);
  max-width: 900px;
  margin: 0 auto;
  font-size: 15pt;
  font-weight: 500;
  text-align: center;
  font-style: italic;
`
export const TableDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;
  margin-top: 20px;
`