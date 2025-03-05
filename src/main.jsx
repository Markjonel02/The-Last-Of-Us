import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { extendTheme } from "@chakra-ui/react";
import themes from "./theme.jsx";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
const theme = extendTheme({ themes });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
