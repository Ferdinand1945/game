import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
`
const StyledUl = styled.ul`
margin-top: 50px;
text-align: center;
text-align: -webkit-center;
`
const StyledLi = styled.li`
padding: 15px;
list-style: none;
border: 1px solid #b1b2b3;
margin: 10px;
width: 150px;
border-radius: 30px;
text-align: center;
background: #9932CC;
a {
    color: #fff;
    text-decoration: none;
    font-weight: 500
}
&:hover{
    background: #9931ee;
}
`
function Menu() {
  return (
    <Container>
      <h1>Välkommen till kodtest spel Monty Hall - för SBAB! </h1>
      <StyledUl>
        <StyledLi><Link to="/description">Projekt Beskrivning</Link></StyledLi>
        <StyledLi><Link to="/game">Börja Spela</Link></StyledLi>
      </StyledUl>
    </Container>
  );
}

export default Menu;
