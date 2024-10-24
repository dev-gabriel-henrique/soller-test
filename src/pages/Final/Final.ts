import styled from "styled-components";

export const FinalContainer = styled.section`
  position: relative;

  padding: 3rem .5rem;
  background-color: ${props => props.theme['purple-light']};

  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    font: 400 1rem/22.4px 'Roboto', sans-serif;
    color: ${props => props.theme['white']};
  } 

  & #miniEllipse {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & #macbook {
    z-index: 2;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  @media (width >= 1280px) {
    padding: 5rem;
    justify-content: center;

    & #lightEllipse {
      position: absolute;
      top: 0;
      right: 0;
    }

    & #macbook {
      width: 63rem;
      align-self: center;
      z-index: 2;
    }

    & h2 {
      width: 55.75rem;
      margin: auto;
      z-index: 2;
    }

    & > div {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      margin-bottom: 5rem;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
  z-index: 2;

  @media (width >= 1280px) {
    margin-bottom: 0;
  }
`
