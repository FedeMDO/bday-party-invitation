import { InvitationInfo } from '../../types';

export async function getInvitationInfo(): Promise<InvitationInfo> {
  const location = 'Lugar Secreto';
  const date = '18/11/2024';
  const from = '12:00';
  const to = '19:00';
  const additionalInfo = 'Traer bebidas';

  return {
    location,
    date,
    from,
    to,
    additionalInfo,
  };
}
