import { HeaderPage } from "../../components/header";
import { Container, HomeSection, Title, SubTitle, Player } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export function Home(){
  return(
    <>
      <HeaderPage/>
      <HomeSection>
        <Container>
          <Title>THE ANNUAL<br/>
          <span>MARKETING</span> CONFERENCE</Title>
          <SubTitle>10-12 December, Downtown Conference Center, New York</SubTitle>

          <Player>
            <div className="circle">
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className="circle-border">
            </div>
          </Player>
          
        </Container>
      </HomeSection>
    </>
  )
}