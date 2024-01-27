import { userLoginInformation } from "../../api/constants";
import { Link } from "react-router-dom";

export default function UserProfileNavigation() {
  const { name, avatar } = userLoginInformation || {};
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
