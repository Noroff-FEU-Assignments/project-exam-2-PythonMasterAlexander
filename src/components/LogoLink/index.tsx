import NetSocialLogo from "../NetSocialLogo";
import { Link } from "react-router-dom";
import { userToken } from "../../api/constants";
import { landingPage, homePage } from "../../utils/constants";
export default function LogoLink() {
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
