import { questionData } from "../types";

export const greekMythologyQuiz: questionData = {
    questions: [
        {
            id: 1,
            question: 'Who is the Greek god of the sea?',
            answers: ['Zeus',
                'Hades',
                'Poseidon',
                'Apollo'],
            correctAnswer: 'Poseidon',
        },
        {
            id: 2,
            question: `What creature has the head of a bull and the body of a man in Greek mythology?`,
            answers: ['Chimera', 'Scylla', 'Minotaur', 'Charybdis'],
            correctAnswer: 'Minotaur',
        },
        {
            id: 3,
            question: `Which goddess is associated with wisdom, warfare, and handicrafts in Greek mythology?`,
            answers: ['Hera', 'Athena', 'Aphrodite', 'Artemis'],
            correctAnswer: 'Athena',
        },
        {
            id: 4,
            question: 'Who is the ferryman of Hades who carries souls of the deceased across the river Styx?',
            answers: ['Cerberus', 'Hermes',
                'Chiron', 'Charon'],
            correctAnswer: 'Charon',
        },
        {
            id: 5,
            question: 'Which hero is known for slaying the Gorgon Medusa?',
            answers: ['Perseus', 'Theseus',
                'Heracles', 'Odysseus'],
            correctAnswer: 'Perseus',
        },
    ],
};