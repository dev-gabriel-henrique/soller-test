import styled from "styled-components";

export const FeaturesContainer = styled.section`
  position: relative;
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  & #yellowRectangle {
    position: absolute;
    width: 110%;
    bottom: 6%;
    z-index: -1;
  }

  @media (width: 1280px) {
    padding: 5rem;
    flex-direction: row-reverse;

    & #yellowRectangle {
      width: 30%;
      bottom: 8%;
      left: 80%;
    }
  }

  @media (width > 1280px) {
    flex-direction: row-reverse;
    padding: 5rem;

    & #yellowRectangle {
      width: 26%;
      bottom: 5%;
      left: 80%;
    }
  }

  @media (width: 1920px) {
    & #yellowRectangle {
      width: 20%;
      right: 0;
    }
  }
`;

export const FeaturesDesc = styled.div`
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
      font: 600 1.25rem/22px "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
      text-align: center;
    }

    & p {
      font: 400 1rem/22.4px "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
      text-align: center;
    }
  }

  @media (width >= 1280px) {
    & div p {
        text-align: start;
    }
  }
`;

export const PhoneFeaturesImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & #phone {
    width: 88%;
  }

  & #ellipse {
    position: absolute;
    bottom: 28%;
    width: 22%;
    right: 5%;
    z-index: 2;
  }

  @media (width: 1280px) {
    justify-content: initial;
    margin-left: 2rem;
    transform: translateY(4rem);

    & #phone {
      transform: scale(2);
    }

    & #ellipse {
      left: 92%;
      width: 45%;
      bottom: 32%;
    }
  }

  @media (width > 1280px) {
    justify-content: start;
    transform: translateY(4rem);
    margin-left: 4rem;

    & #phone {
      transform: scale(1.7);
    }

    & #ellipse {
      left: 82%;
      width: 3.5rem;
      bottom: 32.5%;
    }
  }

  @media (width: 1920px) {
    justify-content: start;
    transform: translateY(4rem);
    margin-left: 4rem;

    & #phone {
      transform: scale(1.4);
    }

    & #ellipse {
      left: 78%;
      width: 4rem;
      bottom: 28%;
    }
  }
`;
