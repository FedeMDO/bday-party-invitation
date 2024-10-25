import { InvitationInfo } from '../../types';

export async function getInvitationInfo(): Promise<InvitationInfo> {
  const location = 'Quinta Las Violetas, C. 1455, B1888 La Capilla, Provincia de Buenos Aires, Argentina';
  const date = 'Lunes 18 de Noviembre (feriado nacional)';
  const from = '12 del mediodia'; // 12 argentina time
  const to = '8 de la noche'; // 19 argentina time
  const additionalInfo = `Llevar bebidas 🥂🍷🍹🍻. Va a haber pileta 🩳👙. <br/>
  <br/>
  ⚠️INDICACIONES PARA LLEGAR 🚗 🚌<br/>
  El lugar queda a 20min de varela centro.<br/>
  Yendo por la ruta, se tienen que bajar a la colectora justo en la maderera color azul francia y naranja 'El Forastero' que esta en una esquina y la tienen a mano derecha yendo desde varela centro.<br/>
  Ahi van por colectora unas 2/3 cuadras y llegan.<br/>
  Linea de colectivo 🚌 que te deja: 148 C - La Capilla`;

  return {
    location,
    date,
    from,
    to,
    additionalInfo,
  };
}
