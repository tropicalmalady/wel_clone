const primaryColors = {
  cream100: "#f7f8f2",
  cream200: "#eff1e5",
  cream300: "#e8f2cf",

  purple100: "#ece7fd",
  purple200: "#e7e7fd",
  purple300: "#dee5fb",

  purple400: "#bcbdfb",
  purple500: "#9597f8",
  purple600: "#7e84e6",
  purple700: "#0b1e5b",
  purple700_2: "rgba(11,30,91,0.5)",

  green100: "#b9db62",
  green200: "#8caf31",
  green300: "#7fb60b",
};

const secondaryColors = {
  black: "#000000",
  pink: "#e64676",
  fadedPurple: "#262333",
  fadedBlue: "#3a4a79",
  blue: "#4e50f4",
  outlineBlue: "#dee5fb",
};

const Colors = {
  primaryColors,
  secondaryColors,
};

const screens = {
  foldable: { max: "319px" },
  minimobile: { min: "320px" },
  mobile: { min: "351px" },
  minitab: { min: "768px" },
  tab: { min: "1024px" },
  laptop: { min: "1200px" },
  desktop: { min: "1600px" },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Museo: ["Museo_Slab"],
      Twk: ["Twk_Lausanne"],
    },
    extend: {
      colors: {
        ...Colors,
      },
    },
    screens,
  },

  plugins: [],
  Colors: {
    ...Colors,
  },
  Screens: {
    ...screens,
  },
};
