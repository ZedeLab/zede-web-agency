import CourierRegular from "@zede-public/fonts/Courier_Prime/CourierPrime-Regular.ttf";
import CourierBold from "@zede-public/fonts/Courier_Prime/CourierPrime-Bold.ttf";
import PlayfairBold from "@zede-public/fonts/Playfair_Display/PlayfairDisplaySC-Bold.ttf";
import PlayfairRegular from "@zede-public/fonts/Playfair_Display/PlayfairDisplaySC-Regular.ttf";

export const courierRegular = {
  fontFamily: "Courier",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 400,
  src: `
    local('Courier'),
    local('CourierRegular'),
    url(${CourierRegular})
  `,
};

export const courierBold = {
  fontFamily: "Courier",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 700,
  src: `
      local('Courier'),
      local('CourierBold'),
      url(${CourierBold})
    `,
};

export const playfairRegular = {
  fontFamily: "Playfair",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 400,
  src: `
      local('Playfair'),
      local('PlayfairRegular'),
      url(${PlayfairRegular})
    `,
};

export const playfairBold = {
  fontFamily: "Playfair",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 700,
  src: `
      local('Playfair'),
      local('PlayfairBold'),
      url(${PlayfairBold})
    `,
};
