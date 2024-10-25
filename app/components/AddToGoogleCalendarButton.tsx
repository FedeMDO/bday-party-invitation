import React from 'react';

// The AddToGoogleCalendar component
export const AddToGoogleCalendarButton = () => {
  const eventTitle = 'Cumple de Fede';
  const location = 'Lugar secreto';
  const description = `Cumple de Fede - ¡No te lo pierdas!`;

  const formattedStartDate = '20241118T110000Z';
  const formattedEndDate = '20241118T190000Z';

  // Construct Google Calendar event URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formattedStartDate}%2F${formattedEndDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  return (
    <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Agregar a Google Calendar 📅
      </button>
    </a>
  );
};
