import styled, { css } from 'styled-components';

export const ProgressBar = styled.div`
  position: absolute;
  background: lightseagreen;
  height: 5px;
  width: 0%;
  top: 50%;
  left: 0;
  margin: 0 5px;

  width: ${props => ((props.step - 1) / (props.totalStep - 1)) * 100 + "%"
  }
`;