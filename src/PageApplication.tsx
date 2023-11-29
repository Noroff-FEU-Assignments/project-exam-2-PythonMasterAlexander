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
        <Route path="landing-page" index element={<LandingPage />} />
        <Route path="user-landing-page" element={<UserLandingPage />} />
        <Route path="create-user-page" element={<CreateUserPage />} />
      </Route>
    </Routes>
  );
}
