import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 12rem;
  height: 100vh;
  float: left;
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
