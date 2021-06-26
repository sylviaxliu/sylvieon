import styled from 'styled-components';
import "../../styles/main.scss"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 3rem;
  position: absolute;
  background-color: #f5f5f5;
  top: 0px;
  left: 0vw;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 9;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

`;