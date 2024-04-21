import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import carImg from '../images/car.jpeg';
import goatImg from '../images/goat.png';

interface DoorProps {
  doorId: number;
  isOpen: boolean;
  hasPrize: boolean;
  isSelected: boolean;
  handleDoorSelection: (doorId: number) => void;
}

const DoorContainer = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  position: relative;
  box-shadow: ${props => props.isSelected ? '0 0 20px yellow' : '0 0 10px #333'};
  margin: 40px;
  overflow: hidden;
    background: #fff;
  
`;

const DoorStyled = styled(motion.div)<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #70483c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 5px solid #563027;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: left;
  border-radius: 2px;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: 20px;
    right: 20px;
    bottom: 10%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.15), transparent);
    opacity: ${props => props.isOpen ? 0 : 1};
  }
`;

const PrizeImage = styled.img<{ isOpen: boolean }>`
  position: absolute;
  top: 67%;
  left: 37%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: none;
  transition: opacity 0.5s ease;
  width: 100%;
`;

const Door = ({ doorId, isOpen, hasPrize, isSelected, handleDoorSelection }: DoorProps) => {
  const toggleOpen = {
    open: { rotateY: 120 },
    closed: { rotateY: 0 },
  };

  return (
    <DoorContainer isSelected={isSelected} onClick={() => handleDoorSelection(doorId)}>
      {hasPrize ? (
        <PrizeImage src={carImg} alt="Car" isOpen={isOpen} />
      ) : (
        <PrizeImage src={goatImg} alt="Goat" isOpen={isOpen} />
      )}
      <DoorStyled
        isOpen={isOpen}
        animate={isOpen ? 'open' : 'closed'}
        variants={toggleOpen}
        transition={{ duration: 0.8 }}
      >
      </DoorStyled>
    </DoorContainer>
  );
};

export default Door;
