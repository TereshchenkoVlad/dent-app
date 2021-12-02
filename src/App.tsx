import React from "react";

import Home from "pages/Home";
import { PopUpContextProvider } from "context/popupContext";

function App() {
  return (
    <PopUpContextProvider>
      <Home />
    </PopUpContextProvider>
  );
}

export default App;
