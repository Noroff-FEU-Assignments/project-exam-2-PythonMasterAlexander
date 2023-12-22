import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";
import UserProfilePage from "./pages/UserProfilePage";
import CreateUserPage from "./pages/CreateUserPage";
import WelcomeToNetSocialPage from "./pages/WelcomeToNetSocialPage";
import "./tailwind.css";
import { Routes, Route } from "react-router-dom";
export default function PageApplication() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="user-profile-page" element={<UserProfilePage />} />
        <Route path="create-user-page" element={<CreateUserPage />} />
        <Route
          path="welcome-to-net-social-page"
          element={<WelcomeToNetSocialPage />}
        />
      </Route>
    </Routes>
  );
}
