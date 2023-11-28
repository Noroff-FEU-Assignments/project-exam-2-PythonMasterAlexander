import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";
import UserLandingPage from "./pages/UserLandingPage";
import CreateUserPage from "./pages/CreateUserPage";
import "./tailwind.css";
import { Routes, Route } from "react-router-dom";
export default function PageApplication() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<LandingPage />} />
        <Route element={<UserLandingPage />} />
        <Route element={<CreateUserPage />} />
      </Route>
    </Routes>
  );
}
