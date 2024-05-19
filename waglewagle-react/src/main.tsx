import React from "react";
import ReactDOM from "react-dom/client";

import { ProviderList } from "~/providers";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderList>
      <App />
    </ProviderList>
  </React.StrictMode>
);
