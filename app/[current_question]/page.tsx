import { Suspense } from 'react';
import { getQuestion } from '../data/services/questions';
import QuestionStep, { QuestionStepSkeleton } from '../components/QuestionStep';
import { QuestionIds } from '../types';

type PageProps = {
  params: Promise<{
    current_question: QuestionIds;
  }>;
  searchParams: Promise<{
    name?: string;
  }>;
};

export default async function Page({ params, searchParams }: PageProps) {
  const { current_question: currentQuestion } = await params;
  const { name } = await searchParams;
  const question = getQuestion(currentQuestion);
  const nextQuestion = String((Number(currentQuestion) || 1) + 1);

  return (
    <div className="flex flex-col items-center justify-center">
      {name ? (
        <>
          <h1 className="mb-4 text-3xl font-bold">Hola,</h1>
          <h1 className="mb-4 animate-spin text-3xl font-bold">{name.toUpperCase()}!</h1>
        </>
      ) : null}
      <p className="mb-10 text-center text-2xl font-bold">
        Responde las siguientes preguntas para obtener tu invitación
      </p>
      <Suspense fallback={<QuestionStepSkeleton />}>
        <QuestionStep questionPromise={question} nextQuestion={nextQuestion} />
      </Suspense>
    </div>
  );
}
