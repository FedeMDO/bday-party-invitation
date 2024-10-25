'use client';

import { useEffect } from 'react';
import { AddToGoogleCalendarButton } from './AddToGoogleCalendarButton';

type Props = {
  success: boolean;
};

export default function ResultCard({ success }: Props) {
  useEffect(() => {
    const audio = new Audio('bocina-reggaeton.mp3');
    audio.play();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Resultado:</h1>
      <div className="animate-bounce py-3 text-5xl">{success ? 'Sos digno 😎' : 'No sos digno 😪'}</div>
      {success ? <AddToGoogleCalendarButton /> : null}
    </div>
  );
}
