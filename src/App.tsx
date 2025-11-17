import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
