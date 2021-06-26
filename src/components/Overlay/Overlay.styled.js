import styled from 'styled-components';
import "../../styles/main.scss"

export const StyledOverlay = styled.nav`
    width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  transition: all 0.3s linear;
  opacity: ${({ open }) => open ? '0.5' : '0'};
  z-index: 2;
  
`;