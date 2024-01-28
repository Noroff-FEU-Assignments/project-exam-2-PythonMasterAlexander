import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function UserProfileNavigation() {
  const { name, avatar } = loadUserFromLocalStorage("user") || {};
  if (!name || !avatar) {
    return null;
  }

  return (
    <>
      <img
        src={avatar}
        className="inline rounded-full w-11"
        alt="any avatar the user have uploaded to display as user profile"
      />
      <span className="capitalize self-center font-poppins font-regular text-theme-color">
        <Link to="/user-profile">{name}</Link>
      </span>
    </>
  );
}
