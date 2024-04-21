import React, { useState } from 'react';
import Door from '../components/Door';
import styled from 'styled-components';
import ConfettiExplosion from 'react-confetti-explosion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DoorsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled.button`
  margin: 20px;
  padding: 15px;
  border-radius: 30px;
  border: 1px solid #b0b0b0;
  background: teal;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
`

const WinMessage = styled.div`
  margin: 20px;
  font-size: 28px;
  color: green;
`;
const LoseMessage = styled.div`
  margin: 20px;
  font-size: 28px;
  color: red;
`;

const Rules = styled.div`
  max-width: 600px;
  font-size: 25px;
  text-align: center;
`
const StyledP = styled.p`
  font-weight: 700;
`
const StyledLi = styled.li`
  margin: 15px 0;
  list-style: none;
  font-weight: 500;
  text-align: left;
`
const Game = () => {
  const [doors, setDoors] = useState([{ id: 1, hasPrize: false, isOpen: false }, { id: 2, hasPrize: false, isOpen: false }, { id: 3, hasPrize: false, isOpen: false }]);
  const [selectedDoor, setSelectedDoor] = useState<number | null>(null);
  const [openDoor, setOpenDoor] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const setupGame = () => {
    const winDoor = Math.floor(Math.random() * 3);
    setDoors(doors.map((door, index) => ({ ...door, hasPrize: index === winDoor, isOpen: false })));
    setSelectedDoor(null);
    setOpenDoor(null);
    setShowResult(false);
  };

  const handleDoorSelection = (doorId: number) => {
    if (selectedDoor === null) {

      const loseDoors = doors.filter(door => !door.hasPrize && door.id !== doorId);
      const doorToOpen = loseDoors[Math.floor(Math.random() * loseDoors.length)];
      setOpenDoor(doorToOpen.id);
      setSelectedDoor(doorId);
    } else if (!showResult) {
      if (doorId !== selectedDoor) {
        setSelectedDoor(doorId);
      }
      const hasWon = doors[doorId - 1]?.hasPrize;
      setIsWinner(hasWon);
      setShowResult(true);
      setDoors(doors.map(door => ({ ...door, isOpen: true })));
    }
  };

  return (
    <Container>
       <Link to="/">Hem</Link>
      <h1>SBAB! - Monty Hall Spel</h1>
      <DoorsContainer>
        {doors.map((door) => (
          <Door
            key={door.id}
            doorId={door.id}
            isOpen={door.id === openDoor || door.isOpen || showResult}
            hasPrize={door.hasPrize}
            isSelected={door.id === selectedDoor}
            handleDoorSelection={handleDoorSelection}
          />
        ))}
      </DoorsContainer>
      {showResult && <p>{doors.find(door => door.id === selectedDoor)?.hasPrize ? (
            <>
              <ConfettiExplosion />
              <WinMessage>Grattis!!! du vann en hel ny bil!!!</WinMessage>
            </>
          ) : (
            <LoseMessage>Oops, du tar med geten hem med dig! Försök igen. 🐐...</LoseMessage>
          )}
          </p>}
      <StyledButton onClick={setupGame}>Restart Game</StyledButton>
      
      <Rules>
      <h2>Spel regler</h2>
      <StyledP>Du får tre dörrar framför dig att välja. Bakom en av dörrarna finns det en awesome ny bil, och bakom de andra två dörrarna gömmer sig två små busiga getter.</StyledP>
      <ul>
        <StyledLi>1- Du börjar med att välja en av dörrarna, men du öppnar den inte än!</StyledLi>
        <StyledLi>2- I en av de andra dörrarna det finns en get.</StyledLi>
        <StyledLi>3- Nu får du välja mellan att hålla kvar vid din första dörr eller byta till den andra stängda dörren.</StyledLi>
        <StyledLi>4- Du väljer! Vill du byta dörr eller inte?</StyledLi>
        <StyledLi>5- Till sist öppnar vi dörren du har valt och ser om den nya bilen är där.</StyledLi>
      </ul>
      <h3>Lycka till!</h3>
      </Rules>

    </Container>
  );
};

export default Game;
