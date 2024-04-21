import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
padding:10px 40px;
text-align: center; 
font-size: 25px
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
const Deps = styled.div`
color:#808080;
text-align: center;

`
function Description() {
  return (
    <Container>
      <h1>Beskrivning</h1>
      <p>Den här spelet är en test fall för SBAB!.</p>
      <p>Spelet fungerar enlig test fall specifikation och är skriven i JavaScript.</p>
      <p>Den använden React.js som JS bibliotek</p>
      <p>Den använder Typescript</p>
      <p>Styling är skriven i CSS under styled components.</p>
      <p>För den här test jag använder ingen CSS framework</p>
      <p>En minimal använding av framer motion för dörr effekt</p>
      <p>Tillagt basisk test för Component navigation och presence in DOM.
        Run: npm test 
      </p>
      <p>Dependencies:</p>
      <Deps>
        <p>--template typescript</p>
        <p>react-router-dom</p>
        <p>styled-components</p>
        <p>framer-motion</p>
        <p>react-confetti-explosion</p>
      </Deps>
      <StyledUl>
        <StyledLi>
          <Link to="/game">Börja Spela</Link>
        </StyledLi>
      </StyledUl>
    </Container>
  );
}

export default Description;
