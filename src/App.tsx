import React from "react";

import AppStack from "routes/AppStack";
import { usePopUpContext } from "context/popupContext";

import PopUp from "components/PopUp";

function App() {
  const { popupVisible } = usePopUpContext();

  return (
    <React.Fragment>
      {popupVisible && <PopUp />}
      <AppStack />
    </React.Fragment>
  );
}

export default App;
