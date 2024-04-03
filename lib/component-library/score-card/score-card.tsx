import React from 'react';
import { quizResults } from '@types';
import styled from 'styled-components';
import { Button } from '../button/button';
import Link from 'next/link';
import { ButtonLink } from '../button-link/button-link';

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
            <Title><Span>{name}</Span>, here is your Quiz Result</Title>
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
                    <TableRow>
                        <TableData>
                            <Button onClick={() => window.location.reload()} disabled={false}>
                                Restart
                            </Button>
                        </TableData>
                        <TableData>
                            <ButtonLink href='/'>Back to Home</ButtonLink>
                        </TableData>
                    </TableRow>
                </TableBody>
            </Table>
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
