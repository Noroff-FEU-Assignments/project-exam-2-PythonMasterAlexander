import ShowOtherUsersProfileOnPage from "../../components/ShowOtherUsersProfileOnPage";
import { Link } from "react-router-dom";
export default function OtherUsersProfilePage() {
  return (
    <>
      <ShowOtherUsersProfileOnPage />
      <div className="btn-container border-[#cbd5e1]">
        <Link to={"/user-home-page"}>To home page</Link>
      </div>
    </>
  );
}
