import BalooBhaiBold from "@zede-public/fonts/BalooBhai2-Bold.ttf";
import BalooBhaiExtraBold from "@zede-public/fonts/BalooBhai2-ExtraBold.ttf";
import BalooBhai from "@zede-public/fonts/BalooBhai2-Regular.ttf";
import BalooBhaiSemiBold from "@zede-public/fonts/BalooBhai2-SemiBold.ttf";

export const balooBhai = {
  fontFamily: "BalooBhai",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 300,
  src: `
    local('BalooBhai2'),
    local('/BalooBhai2-Regular'),
    url(${BalooBhai})
  `,
};

export const balooBhaiBold = {
  fontFamily: "BalooBhai",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 500,
  src: `
      local('BalooBhai2'),
      local('BalooBhai2-Bold'),
      url(${BalooBhaiBold})
    `,
};

export const balooBhaiSemiBold = {
  fontFamily: "BalooBhai",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 700,
  src: `
      local('BalooBhai2'),
      local('BalooBhai2-SemiBold'),
      url(${BalooBhaiSemiBold})
    `,
};

export const balooBhaiExtraBold = {
  fontFamily: "BalooBhai",
  fontStyle: "normal",
  fontDisplay: "auto",
  fontWeight: 900,
  src: `
      local('BalooBhai'),
      local('BalooBhai2-ExtraBold'),
      url(${BalooBhaiExtraBold})
    `,
};
