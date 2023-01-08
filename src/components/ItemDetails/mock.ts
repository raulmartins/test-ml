import { ItemDetailsDTO } from './types';

// Item https://api.mercadolibre.com/items/MLA1146191262
// Description https://api.mercadolibre.com/items/MLA1146191262/description
// Currency info https://api.mercadolibre.com/currencies/ARS, ARS is currency_id

export const mockItem: ItemDetailsDTO = {
  // title on payload
  title: 'Espada China Telescopica Whushu S/filo Practica Mcentro',

  // plain_text into payload description api
  description:
    'BAGDAD PRODUCTOS ESPADA CHINA PRACTICA TELESCOPICA - Hoja de acero sin filo telescopica. - Empuñadura de madera. - Ideal para practica de Whushu, Taichi, etc. - Largo: 90 cm. ** las dimensiones pueden variar levemente** LOCAL EN MICROCENTRO ESTAMOS A 4 CUADRAS DEL OBELISCO SUBTES B - C - D. A PASOS DEL METROBUS 9 DE JULIO Horario: Lunes a Viernes de 10 a 18hs. ENVIOS AL INTERIOR DEL PAIS CONSULTAR VENTAS AL POR MAYOR',

  // pictures into payload Item api, first item of the list, key url
  picture: 'http://http2.mlstatic.com/D_771210-MLA50599347213_072022-O.jpg',

  // condition into payload Item api, it should be parse to condition, original values is new
  condition: 'Nuevo',

  // sold_quantity into payload Item api
  sold_quantity: 50,

  price: {
    //currency_id into payload Item, get currecy api and and take symbol on payload
    currency: '$',

    // price into payload Item api and make split on price so [0] = amount, [1] = decimal
    amount: 2099,
    decimal: 99,
  },
};
