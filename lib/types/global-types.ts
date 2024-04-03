export type questionData = {
    questions: {
        id: number;
        question: string;
        answers: string[];
        correctAnswer: string;
    }[]
};

export type quizResults = {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
}
