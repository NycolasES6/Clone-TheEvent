import React from 'react';

import { Container, Logo, Menu, Li } from './styles';

const Header: React.FC = () => {
  return <Container>
    <Logo src="assets/logo.png"/>

    <Menu>
      <Li>Home <hr/></Li>
      <Li>About <hr/></Li>
      <Li>Speakers <hr/></Li>
      <Li>Schedule <hr/></Li>
      <Li>Venue <hr/></Li>
      <Li>Hotels <hr/></Li>
      <Li>Gallery <hr/></Li>
    </Menu>
  </Container>;
}

export default Header;