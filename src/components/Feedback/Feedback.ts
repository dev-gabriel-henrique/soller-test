import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 343px;

  & p {
    font: 400 1rem/22.4px 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};

    text-align: justify;
  }

  @media (width >= 1280px) {
    max-width: 600px;

    & p {
    font: 400 1.125rem/28.8px 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
    text-align: start;
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: start;

  & img {
    width: 64px;
    height: 64px;
    border-radius: 100px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & h4 {
      font: 400 1.125rem/28.8px 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
    }

    & a {
      font: 400 1rem/22.4px 'Roboto', sans-serif;
      color: ${props => props.theme['link']};
    }
  }
`