import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/body";
import Features from "./components/Features";
import "./components/styles.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/apps" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
