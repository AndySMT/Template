import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <p className="text-3xl font-bold underline text-pink-600">
        Tailwind bella
      </p>
      <Footer />
    </>
  );
}

export default App;
