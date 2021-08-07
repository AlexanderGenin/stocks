import styled from "styled-components";

export const Search = styled.div`
  width: 20rem;
`;

export const SearchInput = styled.input`
  width: 20rem;
  border: 1px solid #1a1e23;
  border-right: none;
  border-left: none;
  background-color: #1a1e23;
  border-radius: 7px 0 0 7px;
  outline: none;
  color: #959598;
  padding: 0.8rem;
  font-size: 1rem;

  &:focus ~ div {
    display: block;
  }
`;

export const SearchButton = styled.button`
  width: 5rem;
  line-height: 1rem;
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #1a1e23;
  background: #1a1e23;
  text-align: center;
  color: #959598;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
  font-size: 1rem;
  transform: translateY(1px);
`;

export const SearchContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`;

export const Dropdown = styled.div`
  width: 26.6rem;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 7px;
  margin-top: 0.2rem;
  position: absolute;
  /* display: none; */
`;

export const Option = styled.div`
  color: ${(props) => props.theme.extraTextColor};
  padding: 0.2rem 1rem;

  div {
    display: flex;
    justify-content: space-between;
    p:first-child {
      text-align: left;
    }
    p:last-child {
      text-align: right;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #292e35;
    &:first-child {
      border-radius: 7px 7px 0 0;
    }
    &:last-child {
      border-radius: 0 0 7px 7px;
    }
  }
`;
