import styled from 'styled-components';
const tablet = `(min-width: 500px)`;
const desktop = `(min-width: 900px)`;

export const Header = styled.div`
  position: absolute;
  width: 100vw;
  height: 15vh;
  background: lightblue;
  padding: 0.5vh 1vw;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100%;
`;

export const Left = styled.div`
  width: 30vw;
  height: 100%;
`;

export const Center = styled.div`
  width: 20vw;
  height: 11vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${tablet} {
    align-items: center;
  }
  justify-content: space-around;
  padding: 0 1vh;
  > div {
    display: flex;
    width: 15vw;
    justify-content: space-around;
    align-items: center;
    svg {
      width: 6vw;
      height: 6vw;
      @media ${tablet} {
        width: 3vw;
        height: 6vh;
      }
    }
  }
`;

export const Right = styled.div`
  width: 55vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  > svg {
    height: auto;
    width: 15vw;
    @media ${tablet} {
      height: 11vh;
      margin-top: 2vh;
    }
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    div {
      width: 15vw;
      padding-top: 1.5vw;
      @media ${tablet} {
        height: 7.5vh;
        width: auto;
      }
      svg {
        width: 9vw;
        heigth: auto;
        @media ${tablet} {
          height: 4vh;
          width: 5vw;
        }
      }
    }
    div:nth-child(1) {
      border-bottom: 1px solid;
      border-right: 1px solid;
      box-sizing: border-box;
    }
    div:nth-child(2) {
      border-bottom: 1px solid;
    }
    div:nth-child(3) {
      border-right: 1px solid;
    }
  }
`;

export const ObjectInZaino = styled.div`
  width: 10vw;
  height: 10vh;
`

export const Abilita = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  > div {
    display: flex;
    justify-content: space-around;
  }
`;

export const AbilitaContainer = styled.div``;

export const Caratteristica = styled.div`
  margin-right: 1vw;
`;

export const AbilitaIconContainer = styled.div`
  width: 6vw;
  height: 6vw;
  max-width: 40px;
  max-height: 40px;
`;

export const Value = styled.div`
  font-size: 1.2em;
  line-height: 1.1em;
`;

export const Cuori = styled.div`
  svg {
    width: 5vw;
    margin-right: 1vw;
    @media ${tablet} {
      height: 5vh;
      width: auto;
    }
  }
`;
