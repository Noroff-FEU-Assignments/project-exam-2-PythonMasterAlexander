import defaultAvatar from "../../resources/avatar.svg";
import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function UserProfileNavigation() {
  const { name, avatar } = loadUserFromLocalStorage("user") || {};

  return (
    <>
      <img
        src={avatar ? avatar : defaultAvatar}
        className={`inline rounded-full w-12 ${
          !avatar && "inline rounded-none w-7"
        }`}
        alt={avatar ? "User avatar" : undefined}
      />
      <span className="capitalize self-center font-poppins font-regular text-theme-color">
        <Link to="/user-profile">{name ? name : "User"}</Link>
      </span>
    </>
  );
}
