import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    & p {
      font: 400 1rem/22.4px 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
    }
  }
  
  & ul {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    margin-top: 1.5rem;

    & a {
      font: 400 1rem/22.4px 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
    }
  }

  @media (width >= 1280px) {
    padding: 2rem 5rem;
    flex-direction: row;
    justify-content: space-between;

    & > div {
      flex-direction: row;
    }

    & ul {
      margin-top: initial;
    }
  }
`