import { questionData } from "../types";

export const quiz: questionData = {
    questions: [
        {
            id: 1,
            question: 'What does API stand for?',
            answers: ['Application Programming Interface',
                'Advanced Programming Interface',
                'Application Program Interface',
                'Automated Programming Interface'],
            correctAnswer: 'Application Programming Interface',
        },
        {
            id: 2,
            question: `What does GQL stand for?`,
            answers: ['Generalized Question Logic', 'Graphical Question Language', 'Global Query Locator', 'Graph Query Language'],
            correctAnswer: 'Graph Query Language',
        },
        {
            id: 3,
            question: `Which programming language is often 
            used for building web servers?`,
            answers: ['Java', 'Python', 'JavaScript', 'C#'],
            correctAnswer: 'JavaScript',
        },
        {
            id: 4,
            question: 'What is the purpose of SQL?',
            answers: ['Styling web pages', 'Querying databases',
                'Creating animations', 'Developing mobile apps'],
            correctAnswer: 'Querying databases',
        },
        {
            id: 5,
            question: 'What does MVC stand for in web development?',
            answers: ['Model View Controller', 'Model Visual Controller',
                'Model View Component', 'Model Visual Component'],
            correctAnswer: 'Model View Controller',
        },
    ],
};