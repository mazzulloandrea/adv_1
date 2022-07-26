import styled, { css } from "styled-components";

// for portrait
const l = "13";
// const l = '75';
const diceDimension = 50;

export const Page = styled.div``;

export const Area1 = styled.div`
  height: 38vh;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 2vh;
`;

export const Area2 = styled.div`
  height: 40vh;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const DiceArea = styled.div`
  display: flex;
  height: 25vh;
  height: 200px;
  justify-content: space-between;
`;

export const AbilitaSection = styled.div`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Type = styled.div`
  text-align: center;
  width: ${l * 2}vw;
  font-weight: bold;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 5vw;
    flex-direction: row;
    margin-top: 1vh;
    width: 20px;
    margin: 0;
    margin-left: 10px;
}
  }
`;

export const Bonus = styled(Type)``;

export const Scene = styled.div`
  // width: ${l * 2}vw;
  // height: ${l * 2}vw;
  width: ${diceDimension * 2}px;
  height: ${diceDimension * 2}px;
  margin: 1vw;
  margin-top: 2vh;
  position: relative;
`;

export const Cube = styled.div`
  // width: ${l * 2}vw;
  // height: ${l * 2}vw;
  width: ${diceDimension * 2}px;
  height: ${diceDimension * 2}px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  position: relative;
  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
    `}
`;

export const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  perspective: 250vw;
`;

const Face = styled.div`
  position: absolute;
  // width: ${l * 2}vw;
  // height: ${l * 2}vw;
  width: ${diceDimension * 2}px;
  height: ${diceDimension * 2}px;
  background: black;
  opacity: 1;
  > img {
    // width: ${l * 2}vw;
    // height: ${l * 2}vw;
    width: ${diceDimension * 2}px;
    height: ${diceDimension * 2}px;
  }
`;

export const Face1 = styled(Face)`
  // transform: rotateY(180deg) translateZ(-${l}vw);
  transform: rotateY(180deg) translateZ(-${diceDimension}px);
`;
export const Face2 = styled(Face)`
  // transform: rotateX(90deg) translateZ(-${l}vw);
  transform: rotateX(90deg) translateZ(-${diceDimension}px);
`;
export const Face3 = styled(Face)`
  // transform: rotateY(-90deg) translateZ(-${l}vw);
  transform: rotateY(-90deg) translateZ(-${diceDimension}px);
`;
export const Face4 = styled(Face)`
  // transform: rotateY(90deg) translateZ(-${l}vw);
  transform: rotateY(90deg) translateZ(-${diceDimension}px);
`;
export const Face5 = styled(Face)`
  // transform: rotateX(-90deg) translateZ(-${l}vw);
  transform: rotateX(-90deg) translateZ(-${diceDimension}px);
`;
export const Face6 = styled(Face)`
  // transform: rotateY(0deg) translateZ(-${l}vw);
  transform: rotateY(0deg) translateZ(-${diceDimension}px);
`;

export const Tentativi = styled.div`
  border-bottom: 2px solid black;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 5vh;
  margin-top: 5vh;
  height: 30px;
  margin-top: 30px;
`;

export const DiceRemaining = styled.div`
  width: 7vw;
  margin: 0 1vw;
  max-width: 30px;
  width: 20px;
`;

export const Risultato = styled.div`
  height: 30vh;
  margin: 2vh 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Obiettivo = styled.div`
  font-size: 1.5em;
  color: ${(props) => (props.valid ? "lightgreen" : "firebrick")};
  font-weight: 500;
`;

export const ActualResult = styled.div`
  color: black;
  font-size: 6em;
`;

export const Prosegui = styled.button`
  width: 40%;
  margin: 2vh auto 10vh;
  display: flex;
  height: 9vh;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  padding: 4vh 2vw;

  ${(props) =>
    props.valid
      ? css`
          background-color: green;
          color: white;
        `
      : css`
          background-color: burlywood;
          color: black;
        `}
`;

export const CubeFace = styled.div`
  position: absolute;
  // width: 26vw;
  // height: 26vw;
  width: ${diceDimension * 2}px;
  height: ${diceDimension * 2}px;

  border: 4px solid white;
  line-height: 26vw;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  background: black;
  opacity: 0.75;
`;

export const CubeFace1 = styled(CubeFace)`
  transform: rotateY(0deg) translateZ(26vw);
`;
export const CubeFace2 = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(26vw);
`;
export const CubeFace3 = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(26vw);
`;
export const CubeFace4 = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(26vw);
`;
export const CubeFace5 = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(26vw);
`;
export const CubeFace6 = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(26vw);
`;
