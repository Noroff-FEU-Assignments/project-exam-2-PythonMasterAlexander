import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";
import ShowEmptyAvatar from "../ShowEmptyAvatar";

export default function UserProfileNavigation() {
  const { name, avatar } = loadUserFromLocalStorage("user") || {};

  return (
    <>
      <img
        src={avatar || ShowEmptyAvatar()}
        className="inline rounded-full w-11"
        alt={avatar ? "Users avatar" : undefined}
      />
      <span className="capitalize self-center font-poppins font-regular text-theme-color">
        <Link to="/user-profile">{name ? name : "User"}</Link>
      </span>
    </>
  );
}
