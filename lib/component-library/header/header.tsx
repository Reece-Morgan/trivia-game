import styled from "styled-components";
import { breakpointValues } from '@settings';

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
  background-color: #000d68;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.2em;
  @media (min-width: ${breakpointValues.sm}) {
    font-size: 1.5em;
  }
`;
