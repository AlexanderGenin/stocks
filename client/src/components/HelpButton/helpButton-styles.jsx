import styled from "styled-components";

export const Button = styled.button`
  margin-left: 1rem;
  background-color: ${(props) => props.theme.boxColor};
  border: transparent;
  color: ${(props) => props.theme.extraTextColor};
  font-weight: bold;
  font-size: 1.1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  align-self: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #2a3138;
  }
`;
