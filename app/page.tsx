'use client'
import styled from "styled-components";
import { breakpointValues } from "@settings";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Title>Choose Your Trivia Game!</Title>
      <List>
        <ListItem>
          <StyledLink href='/programming-quiz'>Programming Quiz</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href='/coming-soon'>Space Quiz</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href='/coming-soon'>Football Quiz</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href='/coming-soon'>Greek Mythology Quiz</StyledLink>
        </ListItem>
      </List>
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

const List = styled.ul``;

const ListItem = styled.li``;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;