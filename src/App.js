import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BackgroundOverlay from "./components/BackgroundOverlay/BackgroundOverlay";

function App() {
  return (
    <Router>
      <div className="app-container">
        <BackgroundOverlay />
        {/*   <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/About/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
