import React from "react";
import ReactDOM from "react-dom/client";
import PageApplication from "./PageApplication";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PageApplication />
  </React.StrictMode>,
);
