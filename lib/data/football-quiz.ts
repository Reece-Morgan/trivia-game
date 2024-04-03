import { questionData } from "../types";

export const footballQuiz: questionData = {
    questions: [
        {
            id: 1,
            question: 'Who holds the record for the most goals scored in a single FIFA World Cup tournament?',
            answers: ['Pelé',
                'Cristiano Ronaldo',
                'Lionel Messi',
                'Miroslav Klose'],
            correctAnswer: 'Miroslav Klose',
        },
        {
            id: 2,
            question: `Which country has won the most UEFA European Championship titles?`,
            answers: ['Germany', 'Spain', 'France', 'Italy'],
            correctAnswer: 'Germany',
        },
        {
            id: 3,
            question: `Which player has won the most Ballon d'Or awards?`,
            answers: ['Lionel Messi', 'Cristiano Ronaldo', 'Michel Platini', 'Johan Cruyff'],
            correctAnswer: 'Lionel Messi',
        },
        {
            id: 4,
            question: 'Which club has won the most UEFA Champions League titles?',
            answers: ['Liverpool', 'Real Madrid',
                'AC Milan', 'Bayern Munich'],
            correctAnswer: 'Real Madrid',
        },
        {
            id: 5,
            question: 'Who is the top scorer in the history of the English Premier League?',
            answers: ['Wayne Rooney', 'Thierry Henry',
                'Alan Shearer', 'Sergio Agüero'],
            correctAnswer: 'Alan Shearer',
        },
    ],
};