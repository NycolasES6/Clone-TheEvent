import styled from "styled-components";

export const HomeSection = styled.section`
  background-image:url('public/assets/img/hero-bg.jpg') ;
  background-position: center;
  background-size: cover;
  height: 100vh;
  font-family: "Roboto-Medium";
`

export const Container= styled.div`
  background-color: #030029ba;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  text-align:center;
  color: white;
  font-size: 45pt;

  span{
    color: #ff004c;
  }
`

export const SubTitle = styled.p`
  margin-top:20px;
  font-size:17pt;
  color: white;
  text-align: center;
`

export const Player = styled.div`
  background-color: #ffffff13;
  margin-top: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .circle{
    background-color: #ff004c;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

  .circle-border{
    border-radius: 50%;
    position: absolute;

    /* &{
    animation-name: border;
    animation-duration:5s;
    animation-iteration-count:infinite;
    animation-fill-mode:backwards ;
    animation-timing-function:ease-in-out;
  }

    @keyframes border{
      79%{
        border: 1px solid rgba(255,255,255,.0);
      }
      80%{
        border: 1px solid rgba(255,255,255,.2);
        height: 65px;
        width: 65px;
      }
      100%{
        border: 1px solid rgba(255,255,255,.0);
        width: 100px;
        height: 100px;
      }
  } */

  
  }
  svg{
    color: white;
    font-size:22pt;
  }
`