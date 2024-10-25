'use client';

import { use } from 'react';
import { AddToGoogleCalendarButton } from './AddToGoogleCalendarButton';
import { InvitationInfo } from '../types';
import { useSearchParams } from 'next/navigation';

type Props = {
  invitationInfoPromise: Promise<InvitationInfo>;
};

export default function SuccessCard({ invitationInfoPromise }: Props) {
  const invitationInfo = use(invitationInfoPromise);

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Resultado:</h1>
      <div className="animate-bounce py-3 text-5xl">Sos digno 😎</div>
      <h2 className="mb-4 text-2xl font-bold">Invitación para{name ? `: ${name}` : ' vos:'}</h2>
      <p className="mb-4 text-lg font-bold">Fecha: {invitationInfo.date}</p>
      <p className="mb-4 text-lg font-bold">
        desde las {invitationInfo.from} hasta las {invitationInfo.to}
      </p>
      <p className="mb-4 text-lg font-bold">Lugar: {invitationInfo.location}</p>
      <p className="mb-4 text-lg font-bold">{invitationInfo.additionalInfo}</p>
      <AddToGoogleCalendarButton />
    </div>
  );
}
