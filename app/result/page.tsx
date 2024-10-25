import { Suspense } from 'react';
import { getResult } from '../data/services/result';
import SuccessCard from '../components/SuccessCard';
import { getInvitationInfo } from '../data/services/getInvitationInfo';

type PageProps = {
  searchParams: Promise<{
    // list of question answers
    answer?: string | string[];
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { answer } = await searchParams;
  const invitationInfoPromise = getInvitationInfo();
  const resultPromise = getResult(answer as string[]);

  return (
    <div className="mx-4 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Resultado:</h1>
      <Suspense fallback={<div className="min-h-96 animate-pulse text-4xl">Cargando resultado...</div>}>
        <SuccessCard resultPromise={resultPromise} invitationInfoPromise={invitationInfoPromise} />
      </Suspense>
    </div>
  );
}
