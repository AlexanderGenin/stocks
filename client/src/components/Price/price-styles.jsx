import styled from "styled-components";

export const PriceContainer = styled.div`
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  background-color: #1a1e23;
  border-radius: 16px;
  width: 14rem;
  margin: 0 auto 1rem auto;

  p {
    margin: 0;
    padding: 0.2rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const PriceText = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
`;

export const PriceChange = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.extraColor};
`;
