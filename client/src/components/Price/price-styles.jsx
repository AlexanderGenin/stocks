import styled from "styled-components";

export const PriceContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.8rem;
  background-color: #1a1e23;
  border-radius: 16px;
  width: 14rem;
  margin: 0 auto 1rem auto;

  p {
    margin: 0;
    text-align: center;
  }
`;

export const PriceText = styled.p`
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

export const PriceChange = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.extraColor};
  font-weight: bold;
`;

export const Currency = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.extraTextColor};
`;
