import { Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import "./assets/style.css";
import Femme from "./pages/femme";
import Homme from "./pages/homme";
import Mixte from "./pages/mixte";
import Accueil from "./pages/accueil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/femme" element={<Femme />} />
      <Route path="/homme" element={<Homme />} />
      <Route path="/mixte" element={<Mixte />} />
    </Routes>
  );
}

export default App;
