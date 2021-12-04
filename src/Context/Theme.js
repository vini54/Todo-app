import bgDark from "../imgs/bg-desktop-dark.jpg";
import bgLight from "../imgs/bg-desktop-light.jpg";

const colors = {
   BrightBlue: "hsl(220, 98%, 61%)",
   VeryDarkBlue: "hsl(235, 21%, 11%)",
   DarkGrayishBlue: "hsl(236, 9%, 61%)",
   VeryLightGray: "hsl(0, 0%, 98%)",
   CheckBackground: "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
}

export const darkTheme = {
   bgBack: colors.VeryDarkBlue,
   imgBack: bgDark,
   background1: "var(--Very-Dark-Desaturated-Blue)",
   body: "var(--Very-Light-Grayish-Blue)",
   smallBody: "var(--Dark-Grayish-Blue)",
   smallHover: "var(--Light-Grayish-Blue)",
   border: "var(--Very-Dark-Grayish-Blue)",
   colors: colors
}
export const lightTheme = {
   bgBack: colors.VeryLightGray,
   imgBack: bgLight,
   background1: "#fff",
   body: "var(--Ver-Dark-Grayish-Blue2)",
   smallBody: "var(--Dark-Grayish-Blue1)",
   smallHover: "var(--Very-Dark-Desaturated-Blue)",
   border: "var(--Light-Grayish-Blue)",
   colors: colors
}