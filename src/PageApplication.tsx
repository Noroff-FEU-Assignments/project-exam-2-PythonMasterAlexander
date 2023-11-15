import LandingPage from "./pages/LandingPage";
import PageLayouts from "./components/PageLayouts";
import { Routes, Route } from "react-router-dom";
export default function PageApplication() {
  return (
    <Routes>
      <Route path="/" element={<PageLayouts />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
