'use client'
import styled from "styled-components";
import { useState } from "react";
import { Button, Quiz } from "@component-library";
import { breakpointValues } from "@settings";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  return (
    <Wrapper>
      {quizStarted ? (
          <Quiz name={name} />
      ) : (
          <FormWrapper>
              <Form>
                  <Label htmlFor="nameInput">
                      Enter Your Name:
                  </Label>
                  <Input
                      type="text"
                      id="nameInput"
                      value={name}
                      onChange={(e) =>
                          setName(e.target.value)}
                  />
              </Form>
              <Button
                  onClick={() => setQuizStarted(true)}
                  disabled={!name.trim()}
              >
                  Start Quiz
              </Button>
          </FormWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: ${breakpointValues.lg};
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  color: #fff;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label``;

const Input = styled.input`
  max-width: 100px;
  margin: 10px 0;
`;
