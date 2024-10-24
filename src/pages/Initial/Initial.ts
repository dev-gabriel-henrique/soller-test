import styled from "styled-components";

export const InitialContainer = styled.section`
  padding: 22.3125rem 1rem 3rem;

  @media (width >= 1280px) {
    padding: 1.75rem 5rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;
  
  & h1 {
    font: 700 2.5rem/44px 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }
  
  & p {
    font: 400 1.125rem/28.8px 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }

  & button {
    margin-bottom: 4rem;
  }

  @media (width >= 1280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;

    max-width: 600px;

    & h1 {
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 79px;
    }

    & p {
      font-size: 1.5rem;
      line-height: 39px;

    }
    
    & button {
      margin-bottom: 8rem;
    }
  }
`