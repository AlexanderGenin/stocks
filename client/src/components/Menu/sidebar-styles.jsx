import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 12rem;
  height: 100vh;
  border-right: 1px ${(props) => props.theme.linesColor} solid;
`;

export const Logo = styled.p`
  color: ${(props) => props.theme.mainColor};
  font: 2rem "Kaushan Script", sans-serif;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #959598;
  text-align: center;
  height: 22rem;

  div {
    cursor: pointer;

    h2 {
      font: 1rem "Nunito", sans-serif;
      margin: 0.2rem;
    }
  }
`;

export const Author = styled.div`
  position: fixed;
  width: 12rem;
  height: 5rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  p {
    margin: 0;
    font-weight: bold;
    font-size: 1.1rem;
  }

  a {
    color: ${(props) => props.theme.extraTextColor};
  }
`;

export const Social = styled.div`
  display: flex;

  svg {
    margin: auto 0.2rem;
  }
`;
