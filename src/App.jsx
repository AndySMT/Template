import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <p className="text-3xl font-bold underline text-pink-600 flex justify-center">
        Tailwind
      </p>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
