import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'HeadlinerNo45', sans-serif",
    body: "'HeadlinerNo45', sans-serif",
  },
  colors: {
    primary: "#ffff",
    secondary: "#1c1a19ff",
    tertiary: "#FECE61",
    quaternary: "#404040",
    quinary: "#F2F2F2",
  },

  styles: {
    global: {
      "html, body": {
        fontFamily: "'HeadlinerNo45', sans-serif",
      },
    },
  },
});

export default theme;
