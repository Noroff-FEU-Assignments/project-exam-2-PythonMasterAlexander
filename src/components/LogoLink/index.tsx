import { Link } from "react-router-dom";
import { userToken } from "../../api/constants";
import NetSocialLogo from "../NetSocialLogo";
export default function LogoLink() {
  const landingPage: string = "/";
  const homePage: string = "/user-home-page";
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
