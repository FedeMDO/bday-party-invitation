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

  const result = await getResult(answer as string[]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {result ? <SuccessCard invitationInfoPromise={invitationInfoPromise} /> : <div>Perdiste 😢</div>}
    </Suspense>
  );
}
