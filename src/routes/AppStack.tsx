import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "pages/Home";
import InfoPage from "pages/InfoPage";

const AppStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppStack;
