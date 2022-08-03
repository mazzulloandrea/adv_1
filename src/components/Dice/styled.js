import styled, { css } from 'styled-components';

// for portrait
const l = '13';

export const Page = styled.div`
  @media only screen and (orientation: landscape) {
    display: flex;
  }
`;

export const Area1 = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  @media only screen and (orientation: landscape) {
    height: 90vh;
    width: 65vw;
  }
`;

export const DiceArea = styled.div`
  display: flex;
  height: 30vh;
  justify-content: space-between;
  @media only screen and (orientation: landscape) {
    height: 75vh;
  }
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
  @media only screen and (orientation: landscape) {
    width: 20vw;
  }

`

export const Bonus = styled(Type)``;

export const Scene = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  margin: 1vw;
  margin-top: 2vh;
  @media only screen and (orientation: landscape) {
    width: 20vw;
    height: 20vw;
  }
`;

export const Cube = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  @media only screen and (orientation: landscape) {
    width: 20vw;
    height: 20vw;
  }
`;

export const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Face = styled.div`
  position: absolute;
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  border: 4px solid white;
  background: black;
  opacity: 1;
  @media only screen and (orientation: landscape) {
    width: 20vw;
    height: 20vw;
  }
`;

export const Face1 = styled(Face)`
  transform: rotateY(0deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateY(0deg) translateZ(10vw);
  }
`
export const Face2 = styled(Face)`
  transform: rotateX(-90deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateX(-90deg) translateZ(10vw);
  }
`
export const Face3 = styled(Face)`
  transform: rotateY(90deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateY(90deg) translateZ(10vw);
  }
`
export const Face4 = styled(Face)`
  transform: rotateY(-90deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateY(-90deg) translateZ(10vw);
  }
`
export const Face5 = styled(Face)`
  transform: rotateX(90deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateX(90deg) translateZ(10vw);
  }
`
export const Face6 = styled(Face)`
  transform: rotateY(180deg) translateZ(${l}vw);
  @media only screen and (orientation: landscape) {
    transform: rotateY(180deg) translateZ(10vw);
  }
`

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  margin: auto 0;
  font-size: 1.5em;
  margin-top: 2vh;
  width: ${l * 2}vw;
  @media only screen and (orientation: landscape) {
    width: 20vw;
  }
  ${props => props.isdisabled && css`
    pointer-events: none;
    opacity: 0.2;
  `}
`;

export const Tentativi = styled.div`
  border-bottom: 2px solid black;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 10vh;
`;

export const DiceRemaining = styled.img`
  width: 10vw;
  margin: 0 1vw;
  @media only screen and (orientation: landscape) {
    width: 4vw;
  }
`;

export const Area2 = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  @media only screen and (orientation: landscape) {
    height: 90vh;
    width: 35vw;
  }
`;

export const Risultato = styled.div`
  height: 25vh;
  margin: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (orientation: landscape) {
    height: 75vh;
    margin: 0 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


export const Obiettivo = styled.div`
  font-size: 1.5em;
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
  @media only screen and (orientation: landscape) { 
    width: 60%;
    height: 10vh;
  }
`;
