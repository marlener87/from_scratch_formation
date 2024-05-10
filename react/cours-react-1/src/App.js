import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Home />} /> {/* si tu ne trouves pas la page demandée dans l'URL, affiche la page d'accueil */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;