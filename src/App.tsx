import { ThemeProvider } from "styled-components";

import { Header } from "./pages/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Initial } from "./pages/Initial";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Features } from "./pages/Features";
import { Feedbacks } from "./pages/Feedbacks";
import { Final } from "./pages/Final";
import { Footer } from "./pages/Footer";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Initial />
      <GlobalStyle />
      <Products />
      <Services />
      <Features />
      <Feedbacks />
      <Final />

      <Footer />
    </ThemeProvider>
  );
}
