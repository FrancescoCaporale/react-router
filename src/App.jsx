import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti";
import ProdottoSingolo from "./pages/ProdottoSingolo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotta padre defaultlayout comune */}
        <Route element={<DefaultLayout />}>
          {/* Rotte figlie */}
          <Route index element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/prodotti/:id" element={<ProdottoSingolo />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App