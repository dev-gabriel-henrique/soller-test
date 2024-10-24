import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const H2VariantStyle = (theme: DefaultTheme, variant = "base") =>
  ({
    base: css`
      color: ${theme["base-text"]};
    `,

    white: css`
      color: ${theme["white"]};
    `,
  })[variant];

export const H2Container = styled.h2<{ variant: string }>`
  font: 700 2rem/35.2px "Roboto", sans-serif;

  @media (width >= 1280px) {
    font: 700 3.5rem/61.6px 'Roboto', sans-serif;
  }
  
  ${({ theme, variant }) => H2VariantStyle(theme, variant)}
`;
