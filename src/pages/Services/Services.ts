import styled from "styled-components";

export const ServicesContainer = styled.section`
  position: relative;

  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  & #purpleRectangle {
    position: absolute;
    bottom: 7%;
    left: 0;
    z-index: -1;

    transform: scale(1.1);
  }

  @media (width >= 1280px) {
    flex-direction: row;
    padding: 5rem;

    & #purpleRectangle {
      width: 25%;
      left: 0;
    }
  }

  @media (width: 1920px) {
    & #purpleRectangle {
      width: 17.5%;
      left: 0;
    }
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & p {
    font: 400 1rem/22.4px "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
  }

  @media (width >= 1280px) {
    text-align: start;

    & div {
      & p {
        font-size: 1.125rem;
        line-height: 28.8px;
      }
    }
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  & div {
    padding-top: 5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h3 {
      font: 600 1.25rem/22px 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
      text-align: center;
    }

    & p {
      font: 400 1rem/22.4px 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
      text-align: center;
    }
  }

  @media (width >= 1280px) {
   & div p {
      text-align: start;
   }
  }
`;

export const PhoneImage = styled.div`
  display: flex;
  justify-content: center;

  & #phone {
    position: relative;
    width: 88%;
  }

  & #frame {
    position: absolute;
    top: 69.5%;
    width: 47%;
    left: 62%;
    z-index: 2;
  }

  @media (width: 1280px) {
    justify-content: start;

    & #frame {
      left: 19.5%;
      width: 9.5rem;
      top: 34.5%;
    }
  }

  @media (width > 1280px) {
    justify-content: start;
    margin-right: 4rem;

    & #phone {
      width: 100%;
    }

    & #frame {
      left: 18.5%;
      width: 10rem;
      top: 33%;
    }
  }

  @media (width: 1920px) {
    margin-right: 5rem;

    & #frame {
      left: 13.2%;
      width: 9rem;
      top: 33.5%;
    }
  }
`