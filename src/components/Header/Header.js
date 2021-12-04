import React from 'react';
import { Container } from './styles';
import switchLight from '../../imgs/icon-sun.svg'
import switchDark from '../../imgs/icon-moon.svg'
import { useState } from 'react';

export function Header(props) {
  const {onTheme} = props
  const [light, setLight] = useState(false)

  const handleTheme = () => {
    if(light === false){
      setLight(true)
      onTheme("light")
    }else{
      setLight(false)
      onTheme("dark")
    }
  }

  return (
      <Container>
         <h1>TODO</h1>
         <button onClick={handleTheme}><img src={light ? switchDark : switchLight} alt="light mode" /></button>
      </Container>
  );
}