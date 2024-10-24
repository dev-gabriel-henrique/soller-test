import styled from "styled-components";

export const ActionButton = styled.button`
  background-color: transparent;

  border: 2px solid ${props => props.theme['yellow-light']};
  border-radius: 50%;

  width: 3rem;
  height: 3rem;
  cursor: pointer;

  & svg {
    fill: ${props => props.theme['yellow-light']};
  }

  &:hover {
    background-color: ${props => props.theme['yellow']};

    & svg {
      fill: ${props => props.theme['white']};
    }
  }

  &:active {
    transform: scale(.9);
  } 
`