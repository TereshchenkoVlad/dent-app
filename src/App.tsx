import React from "react";

import Header from "components/Header";
import { AppConfig } from "config/applicationConfig";

function App() {
  return (
    <div>
      <Header />
      <iframe
        width="100%"
        height="528"
        loading="lazy"
        title="lyashchuk"
        style={{ border: 0 }}
        src={AppConfig.google_api}
      />
    </div>
  );
}

export default App;
