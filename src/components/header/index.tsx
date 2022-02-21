// IMPORTS
import {useState} from 'react'

import {Header} from "./styles"
import {Nav} from "./styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export  function HeaderPage(){
  const [classNameUl, setclassNameUl] = useState('hide')
// IMPORTS

  function UlAnimation() {
    if(classNameUl == 'hide'){
      setclassNameUl('show')
    }else{
      setclassNameUl('hide')
    }
  }

  return(
    <Header>
      <img src="/public/assets/img/logo.png" alt="" />
      <Nav>
        <ul className={classNameUl}>
          <li><a href="#home">Home</a> <hr/></li>
          <li><a href="#about">About</a> <hr/></li>
          <li><a href="#speakers">Speakers</a> <hr/></li>
          <li><a href="#schedule">Schedule</a> <hr/></li>
          <li><a href="#venue">Venue</a> <hr/></li>
          <li><a href="#hotels">Hotels</a> <hr/></li>
          <li><a href="#gallery">Gallery</a> <hr/></li>
          <li><a href="#sponsors">Sponsors</a> <hr/></li>
          <li><a href="#contact">Contact</a> <hr/></li>
        </ul>
        
        <FontAwesomeIcon icon={faBars} onClick={UlAnimation}/>
      </Nav>
      
    </Header>
  )
}