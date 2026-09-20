import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { LocaleProvider } from "./components/locale-provider";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <LocaleProvider defaultLocale="en" storageKey="portfolio-locale">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
