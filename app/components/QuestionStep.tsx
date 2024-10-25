'use client';

import { use } from 'react';
import { Question } from '../types';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  questionPromise: Promise<Question | undefined>;
  nextQuestion: string;
};

export default function QuestionStep({ questionPromise, nextQuestion }: Props) {
  const question = use(questionPromise);
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="animate-wiggle mb-4 flex flex-col rounded-full bg-pink-400 bg-opacity-60">
      <h1 className="mb-2 text-lg font-bold">
        {question?.id} - {question?.question}
      </h1>

      <div className="flex flex-col items-center justify-center">
        {question?.options.map((option, index) => (
          <button
            key={option}
            className="border-gray mb-2 h-10 w-52 rounded border bg-white px-4 py-2 text-black hover:bg-blue-200"
            onClick={() => {
              const questionAndOption = `${question.id}-${index}`;
              const newSearchParams = new URLSearchParams(searchParams.toString());
              newSearchParams.append('answer', questionAndOption);
              router.push(`/${nextQuestion}?${newSearchParams.toString()}`, {
                scroll: false,
              });
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function QuestionStepSkeleton() {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor="q1" className="mb-2 text-lg font-bold">
        Cargando pregunta...
      </label>
      {/* simple list of clickable items  */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          // skeleton list item
          className="mb-2 h-10 w-52 animate-pulse rounded bg-gray-100 px-4 py-2"
        ></div>
      ))}
    </div>
  );
}
