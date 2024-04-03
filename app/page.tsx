'use client'
import styled from "styled-components";
import { breakpointValues } from "@settings";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Title>Choose Your Trivia Game!</Title>
      <StyledLink href='/programming-quiz'>Programming Quiz</StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: ${breakpointValues.lg};
  margin: 0 auto;
  color: #fff;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;