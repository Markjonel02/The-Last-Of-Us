import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'HeadlinerNo45', sans-serif",
    body: "'HeadlinerNo45', sans-serif",
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
