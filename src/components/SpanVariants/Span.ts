import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const SpanVariantStyle = (theme: DefaultTheme, variant = "orange") =>
  ({
    orange: css`
      color: ${theme["orange"]};
    `,

    yellowLight: css`
      color: ${theme["yellow-light"]};
    `,
  })[variant];

export const SpanContainer = styled.span<{ variant: string }>`
  font: 500 1rem/17.6px "Roboto", sans-serif;
  ${({ theme, variant }) => SpanVariantStyle(theme, variant)}

  @media (width >= 1280px) {
    font: 500 1.25rem/22px 'Roboto', sans-serif;
  }
`;
