import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 90px;
  width: 100vw;
  border-bottom: 2px solid white;
  padding:0 15px;

  color: white;

  img{
    height: 40px;
  }

  svg{
    color: white;
    font-size: 20pt;
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  ul{
    width: 100%;
    list-style: none;
    font-family: "Roboto-Medium";
  }

  li{
    display: inline-block;
    margin-bottom: 15px;
    a{
      text-decoration: none;
      color: white;
    }
  }li+li{margin-left:25px;}
  li hr{
    height: 1px;
    background-color:#ff004c;
    width: 0px;
    border: 1px solid #ff004c;
    transition: all .5s;
  }
  li:hover hr{
    width: 100%;
  }

  svg{
    display: none;
  }

  @media (max-width:1000px){
    svg{
      display: inline;
    }
    ul{
      transition: .5s;
      padding: 20px 0;
      position: absolute;
      top: 60px;
      left: 50%;
      margin-left:-45vw;
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color:#ff004c39;
      border-radius: 10px;

      &.hide{
      opacity: 0 ;
      transform: scale(.9);
      position: ;
      }&.show{
        opacity: 1 ;
        transform: scale(1);
        display: inline;
      }
    }

    li{
      margin:0 !important;
      width: 100%;
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
      a{
        padding-top:20px ;
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  }
`