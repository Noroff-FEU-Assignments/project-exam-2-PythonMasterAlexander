import { Link } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../utils/storage";
export default function LogOutUser() {
  return (
    <>
      <div className="btn-container border-[#cbd5e1]">
        <Link onClick={removeUserFromLocalStorage} to={"/"}>
          Logout
        </Link>
      </div>
    </>
  );
}
