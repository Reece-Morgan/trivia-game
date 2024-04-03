import { questionData } from "../types";

export const spaceQuiz: questionData = {
    questions: [
        {
            id: 1,
            question: 'Which planet in our solar system has the highest average surface temperature?',
            answers: ['Venus',
                'Mercury',
                'Earth',
                'Mars'],
            correctAnswer: 'Venus',
        },
        {
            id: 2,
            question: `What is the largest moon in the solar system?`,
            answers: ['Titan', 'Ganymede', 'Io', 'Europa'],
            correctAnswer: 'Ganymede',
        },
        {
            id: 3,
            question: `What is the name of the spacecraft launched by NASA to study Jupiter and its moons?`,
            answers: ['Voyager', 'Galileo', 'Cassini', 'New Horizons'],
            correctAnswer: 'Galileo',
        },
        {
            id: 4,
            question: 'Which of the following stars is the nearest to the Earth?',
            answers: ['Proxima Centauri', 'Sirius',
                'Alpha Centauri A', 'Barnards Star'],
            correctAnswer: 'Proxima Centauri',
        },
        {
            id: 5,
            question: 'What phenomenon occurs when a small object from space enters the Earths atmosphere and burns up, creating a streak of light in the sky?',
            answers: ['Meteoroid', 'Meteor',
                'Meteorite', 'Asteroid'],
            correctAnswer: 'Meteor',
        },
    ],
};