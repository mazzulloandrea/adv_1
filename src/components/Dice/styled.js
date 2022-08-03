import styled, { css } from 'styled-components';

const l = '13';

export const Page = styled.div`
`;

export const DiceArea = styled.div`
  display: flex;
  height: 30vh;
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
`

export const Bonus = styled(Type)``;

export const Scene = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  margin: 1vw;
  // perspective: 600px;
  margin-top: 2vh;
`;

export const Cube = styled.div`
  width: ${l * 2}vw;
  height: ${l * 2}vw;
  position: relative;
  transform-style: preserve-3d;
  // transform: translateZ(${l}vw);
  transition: transform 1s;
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
`;

export const Face1 = styled(Face)`
  transform: rotateY(0deg) translateZ(${l}vw);
`
export const Face2 = styled(Face)`
  transform: rotateX(-90deg) translateZ(${l}vw);
`
export const Face3 = styled(Face)`
  transform: rotateY(90deg) translateZ(${l}vw);
`
export const Face4 = styled(Face)`
  transform: rotateY(-90deg) translateZ(${l}vw);
`
export const Face5 = styled(Face)`
  transform: rotateX(90deg) translateZ(${l}vw);
`
export const Face6 = styled(Face)`
  transform: rotateY(180deg) translateZ(${l}vw);
`

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  margin: auto 0;
  font-size: 1.5em;
  margin-top: 2vh;
  width: ${l * 2}vw;
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
`;

export const Risultato = styled.div`
  height: 25vh;
  margin: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Obiettivo = styled.div`
  font-size: 1.5em;
`;

export const ActualResult = styled.div`
  font-size: 4em;
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
