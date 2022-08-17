import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: lightblue;
  padding: 1vh 1vw;
  > div {
    padding: 1vh 1vw;
  }
`;

export const Left = styled.div`
  width: 30vw;
  height: 10vh;
`;

export const Center = styled.div`
  width: 30vw;
  height: 10vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
   svg {
    width: 6vw;
   }
`;

export const Right = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  > svg {
    width: 10vw;
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    div {
      width: 15vw;
      padding-top: 1.5vw;
      svg {
        width: 5vw;
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
  > div {
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

export const Caratteristica = styled.div`
  margin-right: 1vw;
`;

export const AbilitaIconContainer = styled.div`
  width: 4vw;
  @media only screen and (orientation: landscape) {
    width: 2vw;
  }
`;

export const Cuori = styled.div`
   svg {
    width: 4vw;
    margin-right: 1vw;
    @media only screen and (orientation: landscape) {
      width: 2vw;
    }
   }
`;

export const AbilitaContainer = styled.div`
@media only screen and (orientation: landscape) { 
  width: 50%;
  margin: 0 5vw 0 2vw;
}
`;

export const Container = styled.div`
  width: 4vh;
  height: auto;
`;
