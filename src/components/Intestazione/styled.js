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
`;

export const Abilita = styled.div`
  width: 25vw;
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

export const Title = styled.div`
  width: ${props => props.moreWidth ? '70vw' : '50vw'};
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5em;
  font-weight: 500;
`;

export const IconContainer = styled.div`
  > svg {
    width: auto;
    height: 8vh;
  }
`;

export const Zaino = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    line-height: 2.5vh;
  }
  @media only screen and (orientation: landscape) {  
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    > div {
      width: 12.5vw;
      line-height: 4.5vh;
    }

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
