import React from "react";
import { Auth0ProviderWithHistory } from "./components/Auth/Auth0-provider-with-history";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <Home />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);
