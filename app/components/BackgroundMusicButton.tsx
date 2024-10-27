'use client';

import { useState } from 'react';

export const BackgroundMusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      return;
    }
    setIsPlaying(true);
    const audio = new Audio('bg-song.mp3');
    audio.play();
  };

  return (
    <button
      onClick={handleClick}
      className="mt-12 animate-bounce rounded-full bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700"
    >
      ⏯️musiquita 🔊
    </button>
  );
};
