import { PERSONAL_QUESTIONS } from './questions';

export async function getResult(answers: string[]) {
  // simulate a slow network
  await new Promise(resolve => setTimeout(resolve, 2000));
  let numberOfCorrectAnswers = 0;

  for (const answer of answers) {
    const questionId = answer.split('-')[0];
    const answerIndex = parseInt(answer.split('-')[1], 10);

    if (
      PERSONAL_QUESTIONS.find(personalQuestion => personalQuestion.id === questionId)?.correctAnswerIndex ===
      answerIndex
    ) {
      numberOfCorrectAnswers++;
    }
  }

  if (numberOfCorrectAnswers < 3) {
    return false;
  }

  return true;
}
