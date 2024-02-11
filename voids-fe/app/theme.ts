"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#5283dd'
      },
      secondary: green,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
