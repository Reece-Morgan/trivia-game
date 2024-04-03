'use client'
import styled from "styled-components";
import { breakpointValues } from "@settings";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <Wrapper>
      <Title>This Quiz is Coming Soon!!</Title>
      <StyledLink href='/'>Back to Home</StyledLink>
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