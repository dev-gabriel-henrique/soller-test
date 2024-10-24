import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const ButtonVariantStyle = (theme: DefaultTheme, variant = "primary") =>
  ({
    primary: css`
      padding: 1.25rem 1.5rem;

      border-radius: 100px;
      border: 2px solid ${theme["yellow-light"]};

      font: 700 1.25rem/24px "Roboto", sans-serif;
      color: ${theme["yellow-light"]};
      letter-spacing: 0.5px;

      transition: all 0.1s ease;

      & svg path {
        fill: ${theme["yellow-light"]};

        transition: fill .1s ease;
      }

      &:hover {
        border: 2px solid ${theme['yellow']};
        color: ${theme["brown-light"]};
        background-color: ${theme["yellow"]};

        box-shadow: 0 0 4 4px ${theme["black"]};

        & svg path {
          fill: ${theme["brown-light"]};
        }
      }
    `,

    secondary: css`
      padding: 1.25rem 1.5rem;

      border-radius: 100px;
      border: 2px solid ${theme["purple"]};

      font: 700 1.25rem/24px "Roboto", sans-serif;
      color: ${theme["purple"]};
      letter-spacing: 0.5px;

      transition: all 0.5s ease;

      & svg path {
        fill: ${theme["purple"]};
        transition: fill .1s ease;
      }

      &:hover {
        border: 2px solid ${theme['purple']};
        color: ${theme["yellow-light"]};
        background-color: ${theme["purple"]};

        box-shadow: 0 0 4 4px ${theme["black"]};

        & svg path {
          fill: ${theme["yellow-light"]};
        }
      }
    `,
  })[variant];

export const ButtonContainer = styled.button<{ variant: string }>`
  width: 306px;
  height: 64px;

  background: transparent;

  display: flex;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  border-radius: 100px;

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:focus {
    background: transparent
  }

  &:active {
    transform: scale(.9);
  }

  ${({ theme, variant }) => ButtonVariantStyle(theme, variant)}
`;

