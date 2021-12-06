import PopUp from "components/PopUp";
import { usePopUpContext } from "context/popupContext";
import React from "react";

import AppStack from "routes/AppStack";

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
