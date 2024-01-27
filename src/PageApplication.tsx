import LandingPage from "./pages/LandingPage";
import PageLayout from "./components/PageLayout";
import UserProfilePage from "./pages/UserProfilePage";
import CreateUserPage from "./pages/CreateUserPage";
import WelcomeToNetSocialPage from "./pages/WelcomeToNetSocialPage";
import UserHomePage from "./pages/UserHomePage";
import UserSearchPage from "./pages/UserSearchPage";
import OtherUsersProfilePage from "./pages/OtherUsersProfilePage";
import OtherUsersPostPage from "./pages/OtherUsersPostPage";
import "./tailwind.css";
import { Routes, Route } from "react-router-dom";
export default function PageApplication() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="user-profile" element={<UserProfilePage />} />
        <Route path="create-user" element={<CreateUserPage />} />
        <Route path="user-home" element={<UserHomePage />} />
        <Route path="user-search" element={<UserSearchPage />} />
        <Route
          path="other-users-profile/:name"
          element={<OtherUsersProfilePage />}
        />
        <Route
          path="welcome-to-net-social"
          element={<WelcomeToNetSocialPage />}
        />
        <Route path="other-users-post/:id" element={<OtherUsersPostPage />} />
      </Route>
    </Routes>
  );
}
