import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #959598;
  text-align: center;
  height: 22rem;

  div {
    cursor: pointer;
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      margin: auto;
      border-radius: 12px;
      background-color: transparent;

      svg {
        stroke: ${(props) => props.theme.textColor};
      }
    }

    h2 {
      font: 1rem "Nunito", sans-serif;
      margin: 0.2rem;
    }

    &.active {
      .wrapper {
        background-color: ${(props) => props.theme.mainColor};

        svg {
          stroke: white;
        }
      }
      h2 {
        color: ${(props) => props.theme.mainColor};
      }
    }
  }

  div:last-child {
    svg {
      transform: rotate(180deg);
    }
  }
`;
