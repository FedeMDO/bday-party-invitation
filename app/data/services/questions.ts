import 'server-only';
import { Question } from '../../types';

// define the questions
export const PERSONAL_QUESTIONS: Question[] = [
  {
    id: '1',
    question: 'Cual es mi segundo nombre?',
    options: ['Alejandro', 'Adrian', 'Miguel', 'Manuel'],
    correctAnswerIndex: 1,
  },
  {
    id: '2',
    question: 'Cual es mi animal favorito?',
    options: ['Perro🐩', 'Gato🐈‍⬛', 'Carpincho', 'Delfin🐬'],
    correctAnswerIndex: 2,
  },
  {
    id: '3',
    question: 'De que trabajo?',
    options: ['Contador🔢', 'Asesor Financiero🤑', 'Soporte en Sistemas🖥️', 'Programador👨🏽‍💻'],
    correctAnswerIndex: 3,
  },
  {
    id: '4',
    question: 'Cual es mi deporte favorito?',
    options: ['Futbol⚽️', 'Tenis🎾', 'Basquet🏀', 'Natacion🏊🏼'],
    correctAnswerIndex: 3,
  },
  {
    id: '5',
    question: 'Cual es mi pasatiempo favorito?',
    options: ['Entrenar🏋🏽‍♂️', 'Jugar videojuegos🎮', 'Ver series📺', 'Escuchar musica🎧'],
    correctAnswerIndex: 0,
  },
];

export async function getQuestion(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return PERSONAL_QUESTIONS.find(question => question.id === id);
}
