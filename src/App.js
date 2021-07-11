import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Skills />
      <Footer />
    </Router>
  );
}

export default App;
