import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: .5rem 1rem;

  & #worker{
    width: 80%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  @media (width >= 1280px) {
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & #worker {
      width: 45%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }

    & ul li {
        font: 500 1rem/24px 'Roboto', sans-serif;
        color: ${props => props.theme['base-text']};
        letter-spacing: 0.5px;
    }
  }
  @media (width: 1920px) {
    & #worker {
      width: 34%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.375rem;

    & img {
      transition: transform .1s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    & ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    & li {
      transition: transform .1s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
` 

export const HeaderContact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    padding: .75rem .5rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    color: ${props => props.theme['blue']};

    & svg {
      fill: ${props => props.theme['blue']};
    }
  }

  @media (width >= 1280px) {
    & > a {
      & p {
        font: 500 1rem/24px 'Roboto', sans-serif;
      }
    }
  }
`