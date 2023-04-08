import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

import React from 'react';

const App = () => {
  return (
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />   
          <Route path="/knowledges" element={<Knowledges />} />
          <Route path="/portfolio" element={<Portfolio />} />   
          <Route path="/*" element={<NotFound />} />   
        </Routes>
      </Router>,
      document.getElementById("root")
    )
  );
};

export default App;




