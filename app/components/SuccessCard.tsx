'use client';

import { use } from 'react';
import { AddToGoogleCalendarButton } from './AddToGoogleCalendarButton';
import { InvitationInfo } from '../types';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Props = {
  invitationInfoPromise: Promise<InvitationInfo>;
  resultPromise: Promise<boolean>;
};

export default function SuccessCard({ invitationInfoPromise, resultPromise }: Props) {
  const invitationInfo = use(invitationInfoPromise);
  const result = use(resultPromise);

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  if (result === false) {
    return <div>Perdiste, mas suerte el proximo año 😢</div>;
  }

  return (
    <>
      <div className="animate-bounce py-3 text-5xl">Sos digno 😎</div>
      <h2 className="mb-4 text-2xl font-bold">Invitación para{name ? `: ${name}` : ' vos:'}</h2>
      <div className="rounded bg-gray-200 bg-opacity-75 p-4 text-lg font-bold text-black">
        <p className="mb-4">Fecha: </p>
        <p className="animate-wiggle inline-block bg-gradient-to-r from-red-600 via-green-600 to-blue-600 bg-clip-text text-3xl text-transparent">
          {invitationInfo.date}
        </p>
        <p className="mb-4">
          Hora: Desde las {invitationInfo.from} (desalojamos tipo {invitationInfo.to})
        </p>
        <p className="mb-4">
          Lugar:{' '}
          <Link
            className="text-blue-700"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${invitationInfo.location}`}
          >
            {invitationInfo.location} (ver en Maps)
          </Link>
        </p>
        <p className="mb-4">Info adicional</p>
        <p className="mb-4 text-justify" dangerouslySetInnerHTML={{ __html: invitationInfo.additionalInfo }}></p>
        <div className="flex justify-center">
          <AddToGoogleCalendarButton invitationInfo={invitationInfo} />
        </div>
      </div>
    </>
  );
}
