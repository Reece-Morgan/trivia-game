import React, { useState } from 'react';
import { questionData, quizResults } from '@types';
import { ScoreCard } from '../score-card/score-card';
import styled from 'styled-components';
import { Button } from '../button/button';

interface Props {
    name: string;
    quiz: questionData;
}
 
export const Quiz = ({ name, quiz }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [answerChecked, setAnswerChecked] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(999);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [quizResult, setQuizResult] = useState<quizResults>({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
 
    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[currentQuestionIndex];
 
    const onAnswerSelected = (answer: string, idx: number) => {
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer);
        setAnswerChecked(true);
    };
 
    const handleNextQuestion = () => {
        if (selectedAnswer === correctAnswer) {
            setQuizResult((prev) => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else {
            setQuizResult((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
        }
        if (currentQuestionIndex !== questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
        setSelectedAnswer('');
        setSelectedAnswerIndex(999);
        setAnswerChecked(false);
    };
 
    return (
        <Wrapper>
            {!showResults ? (
                <QuizWrapper>
                    <Question>{question}</Question>
                    <List>
                        {answers.map((answer, idx) => (
                            <ListItem key={idx}>
                                <Span
                                    onClick={() => onAnswerSelected(answer,idx)}
                                    isSelected={selectedAnswerIndex === idx}
                                >
                                    {answer}
                                </Span>
                            </ListItem>
                        ))}
                    </List>
                    <Answers>
                        <BoldText>
                            Question {currentQuestionIndex + 1}/{questions.length}
                        </BoldText>
                        <Button
                            onClick={handleNextQuestion}
                            disabled={!answerChecked}
                        >
                            {currentQuestionIndex === questions.length - 1 ?
                                'Submit' : 'Next Question'}
                        </Button>
                    </Answers>
                </QuizWrapper>
            ) : (
                <ScoreCard
                    quizResult={quizResult}
                    questions={questions}
                    name={name}
                />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  color: #fff;
`;

const QuizWrapper = styled.div`
  color: #fff;
`;

const Question = styled.p`
    font-size: 1.2em;
`;

const List = styled.ul``;

const ListItem = styled.li`
    cursor: pointer;
    margin: 10px 0;
`;

const Span = styled.span<{ isSelected: boolean }>`
  border-bottom: ${props => props.isSelected ? '2px solid #fff' : '2px solid transparent'};
`;

const Answers = styled.div``;

const BoldText = styled.p`
  font-weight: 700;
`;
