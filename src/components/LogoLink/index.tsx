import NetSocialLogo from "../NetSocialLogo";
import { Link } from "react-router-dom";
import { landingPage, homePage } from "../../utils/constants";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function LogoLink() {
  const userToken = loadUserFromLocalStorage("token");
  let isLoggedIn: boolean = false;
  if (userToken) {
    isLoggedIn = true;
  }
  return (
    <Link to={isLoggedIn ? homePage : landingPage}>
      <NetSocialLogo />
    </Link>
  );
}
