import { Link } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../utils/storage";

export default function LogOutUser() {
  return (
    <>
      <div className="btn-container border-[#cbd5e1] w-48">
        <Link
          onClick={removeUserFromLocalStorage}
          to={"/"}
          className="primary-button-style"
        >
          log out
        </Link>
      </div>
    </>
  );
}
