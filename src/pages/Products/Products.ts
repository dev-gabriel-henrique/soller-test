import styled from "styled-components";

export const ProductsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem 1rem;

  & > div {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  & p {
    font: 400 1rem/22.4px "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 4rem;
  }

  & img {
    transform: scale(1.05);
  }

  & #yellowE {
      width: 50%;
      position: absolute;
      bottom: 25%;
      right: 90%;
      z-index: -1;
    }

    & #purpleE {
      width: 70%;
      position: absolute;
      top: 45%;
      left: 80%;
      z-index: -1;
    }

  @media (width >= 1280px) {
    padding: 5rem;
    
    & p {
      max-width: 900px;
      margin: 0 auto 5rem;

      font: 400 1.25rem/36px "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
    }
    
    & #yellowE {
      width: initial;
      position: absolute;
      top: 15%;
      right: 80%;
      z-index: -1;
    }

    & #purpleE {
      width: initial;
      position: absolute;
      bottom: 15%;
      left: 80%;
      z-index: -1;
    }

    & #desktop {
      transition: transform 0.5s ease;
      transform: scale(0.9);

      &:hover {
        transform: scale(1);
      }
    }
  }
`;
