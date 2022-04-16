import styled from 'styled-components';

interface ContProps{
  bg:string
}
export const Container = styled.div<ContProps>`
  width: 30%;
  min-width: 300px;
  height: 300px;
  margin: 10px 5px;

  background-image:url(${props => props.bg});
  background-size:cover;
  background-position: center center;
  border-radius: 2px;
  transition: .3s;
  :hover{
    transform: scale(1.05);
    box-shadow:0 0 15px rgba(0, 0, 0, .4);
    div{
      margin-top: 200px;
      height: 100px;
    }
  }
`;

export const Legend = styled.div`
  width: 100%;
  height: 70px;

  text-align: center;

  background-color: var(--dark-blue-transparent);
  color: var(--white);
  margin-top: 230px;
  transition: .3s;
`