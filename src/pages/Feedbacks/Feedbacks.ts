import styled from "styled-components";

interface ScrollableContainerProps {
  currentFeedback: number;
}

export const FeedbacksContainer = styled.section`
  padding: 3rem 1rem;

  background-color: ${props => props.theme['purple']};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  @media (width >= 1280px) {
    padding: 5rem;
  }
`

export const TitleFeedbacks = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const HeaderFeedbacks = styled.header`
    display: flex;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    & > p {
      font: 400 1rem/22.4px 'Roboto', sans-serif;
      color: ${props => props.theme['white']};
    }

    @media (width >= 1280px) {
      text-align: start;
      justify-content: start;
      align-items: start;
    }
`

export const ScrollableContainer = styled.ul<ScrollableContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  overflow-x: visible;
  width: 100%;
  padding-left: calc(10% - 11.1875rem);
  transform: ${({ currentFeedback }) =>
    `translateX(calc(-${currentFeedback} * (22.375rem + 1.5rem)))`};
  transition: transform 0.5s ease-in-out;

  & li {
    display: block;
    padding: 7rem 2rem 2rem;
    min-width: 22.375rem;
    transform: scale(0.9);
    opacity: 0.5;
    transition: transform 0.3s ease, opacity 0.3s ease;
    border-radius: 10px;
    background-color: ${({ theme }) => theme["white"]};
  }

  & li.active {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;

  @media (width >= 1280px) {
    justify-content: start;
  }
`