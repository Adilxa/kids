import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Thx from "./components/thanks/Thx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
const TRACKING_ID = "GTM-PXW5D2Q";

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thx" element={<Thx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
