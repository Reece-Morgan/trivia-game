import React, { useState } from 'react';
import { quiz } from '@data';
import { quizResults } from '@types';
import { ScoreCard } from '../score-card/score-card';

interface Props {
    name: string;
}
 
export const Quiz = ({ name }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [answerChecked, setAnswerChecked] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(0);
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
        setSelectedAnswerIndex(0);
        setAnswerChecked(false);
    };
 
    return (
        <div>
            <div>
                {!showResults ? (
                    <div>
                        <h4>{question}</h4>
                        <ul>
                            {answers.map((answer, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => onAnswerSelected(answer,idx)}
                                    className={
                                        'list-group-item ' +
                                        (selectedAnswerIndex === 
                                                idx ? 'active' : '') +
                                        ' cursor-pointer'
                                    }
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <b>Question
                                {currentQuestionIndex + 1}/{questions.length}
                            </b>
                            <button
                                onClick={handleNextQuestion}
                                disabled={!answerChecked}
                            >
                                {currentQuestionIndex === questions.length - 1 ?
                                    'Submit' : 'Next Question'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <ScoreCard
                        quizResult={quizResult}
                        questions={questions}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
};
