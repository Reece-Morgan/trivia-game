import React from 'react';
import { quizResults } from '@types';
import styled from 'styled-components';

interface Props {
    quizResult: quizResults;
    questions: any[];
    name: string;
}
 
export const ScoreCard = ({ quizResult, questions, name }: Props) => {
    const passPercentage = 60;
 
    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';
 
    return (
        <Wrapper>
            <Title>Hello, <Span>{name}</Span>. Here is your Result Analysis</Title>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableData>Total Questions:</TableData>
                        <TableData>{questions.length}</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Total Score:</TableData>
                        <TableData>{quizResult.score}</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Correct Answers:</TableData>
                        <TableData>{quizResult.correctAnswers}</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Wrong Answers:</TableData>
                        <TableData>{quizResult.wrongAnswers}</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Percentage:</TableData>
                        <TableData>{percentage}%</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Status:</TableData>
                        <TableData>{status}</TableData>
                    </TableRow>
                </TableBody>
            </Table>
            <Button onClick={() => window.location.reload()}>
                Restart
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.2em;
`;

const Span = styled.span`
  text-transform: capitalize;
`;

const Table = styled.table``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableData = styled.td``;

const Button = styled.button`
  color: #fff;
  background-color: #023610;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 1em;
`;