import { Link } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../utils/storage";

export default function LogOutUser() {
  return (
    <>
      <div className="btn-container border-[#cbd5e1] w-48">
        <Link
          onClick={removeUserFromLocalStorage}
          to={"/"}
          className="uppercase font-poppins font-bold text-theme-color text-base"
        >
          log out
        </Link>
      </div>
    </>
  );
}
