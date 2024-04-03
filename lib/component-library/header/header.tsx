import styled from "styled-components";
import { breakpointValues } from "@settings";

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Title data-testId="header-title">Trivia Game</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0d001a;
  border-bottom: 2px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  @media (min-width: ${breakpointValues.sm}) {
    font-size: 1.5em;
  }
`;
