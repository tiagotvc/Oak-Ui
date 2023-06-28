import { gradient } from "./animations";

export const theme = {
  btn: {
    colors: {
      primary: "#00bfff",
      secondary: "#ff6f9c",
      dark: "#4b4458",
      sucess: "#32cd32",
      danger: "danger",
    },
    animations: {
      gradient: gradient,
    },
  },
  typograph: {
    size: {
      title: "30px",
      subtitle: "25px",
      body1: "20px",
      body2: "18px",
      body3: "15px",
    },
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: "1rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  spacings: {
    xsmall: "0.8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
} as const;
