import React from 'react';
import { InvitationInfo } from '../types';

type Props = {
  invitationInfo: InvitationInfo;
};

export const AddToGoogleCalendarButton = ({ invitationInfo }: Props) => {
  const eventTitle = 'Cumple de Fede';
  const location = invitationInfo.location;
  const description = invitationInfo.additionalInfo;

  const formattedStartDate = '20241118T130000Z'; // UTC time for 11 AM Argentina time
  const formattedEndDate = '20241119T010000Z'; // UTC time for 8 PM Argentina time

  // Construct Google Calendar event URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formattedStartDate}%2F${formattedEndDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  return (
    <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <p className="inline-block animate-spin">📅</p> Agregar a Calendar{' '}
        <p className="inline-block animate-spin">📅</p>
      </button>
    </a>
  );
};
