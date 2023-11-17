import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";
export default function PageApplication() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
