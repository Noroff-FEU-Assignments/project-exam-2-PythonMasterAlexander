import ReactDOM from "react-dom/client";
import PageApplication from "./PageApplication";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <PageApplication />
  </BrowserRouter>,
);
