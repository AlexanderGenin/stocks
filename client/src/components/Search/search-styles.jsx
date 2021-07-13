import styled from "styled-components";

export const Search = styled.div`
  width: 20rem;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 20rem;
  border: 1px solid #1a1e23;
  border-right: none;
  background-color: #1a1e23;
  padding: 0.5rem;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #959598;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SearchButton = styled.button`
  width: 5rem;
  line-height: 1rem;
  padding: 0.5rem;
  border: 1px solid #1a1e23;
  background: #1a1e23;
  text-align: center;
  color: #959598;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 1rem;
  transform: translateY(1px);
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem auto;
`;
