import styled from 'styled-components';

export const Container = styled.div`
  z-index:1;
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  position: fixed;
  background-color: var(--dark-blue-transparent);
`;

export const Logo = styled.img`
  height:45px;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`

export const Li = styled.li`
  font-size: 13pt;
  color: var(--gray);
  transition:.3s;

  :hover{
    color: var(--white);
    cursor: pointer;
    hr{
      border: 1px solid var(--pink);
      width: 100%;
    }
  }

  +li{
    margin-left:20px;
  }

  hr{
    width: 0%;
    border: 1px solid transparent;
    transition: .5s;
  }

`
