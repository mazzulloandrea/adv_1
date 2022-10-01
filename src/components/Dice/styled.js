import styled, { css } from 'styled-components';

// for portrait
const l = '13';

export const Page = styled.div`
`;

export const Area1 = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 2vh;
`;

export const DiceArea = styled.div`
  display: flex;
  height: 25vh;
  justify-content: space-between;
`

export const AbilitaSection = styled.div`
  ${props => props.disabled && css`
    opacity: 0.2;
    pointer-events: none;
  `}
`;

export const Type = styled.div`
  text-align: center;
  width: ${l * 2}vw;
  font-weight: bold;
  svg {
    width: 4vw;
    flex-direction: row;
    margin-top: 1vh;
  }
`

export const Bonus = styled(Type)``;

export const Scene = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  margin: 1vw;
  margin-top: 2vh;
  position: relative;
`;

export const Cube = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  
  transform-style: preserve-3d;
  transition: transform 1s;
  position: relative;
  ${props => props.isDisabled && css`
    pointer-events: none;
  `}
`;

export const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Face = styled.div`
  position: absolute;
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  background: black;
  opacity: 1;
  > img {
    width: ${l * 2}vw;
    height: ${l * 2}vw;
  }
`;

export const Face1 = styled(Face)`
  transform: rotateY(0deg) translateZ(-${l}vw);
`
export const Face2 = styled(Face)`
  transform: rotateX(-90deg) translateZ(-${l}vw);
`
export const Face3 = styled(Face)`
  transform: rotateY(90deg) translateZ(-${l}vw);
`
export const Face4 = styled(Face)`
  transform: rotateY(-90deg) translateZ(-${l}vw);
`
export const Face5 = styled(Face)`
  transform: rotateX(90deg) translateZ(-${l}vw);
`
export const Face6 = styled(Face)`
  transform: rotateY(180deg) translateZ(-${l}vw);
`

export const Tentativi = styled.div`
  border-bottom: 2px solid black;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 10vh;
`;

export const DiceRemaining = styled.div`
  width: 7vw;
  margin: 0 1vw;
  @media only screen and (orientation: landscape) {
    width: 4vw;
  }
`;

export const Area2 = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const Risultato = styled.div`
  height: 30vh;
  margin: 2vh 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Obiettivo = styled.div`
  font-size: 1.5em;
  color: ${props => props.valid ? 'green' : 'firebrick'};
  font-weight: 500;
`;

export const ActualResult = styled.div`
  color: black;
  font-size: 6em;
`;

export const Prosegui = styled.button`
  width: 40%;
  margin: 0 auto;
  display: flex;
  height: 7vh;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;
