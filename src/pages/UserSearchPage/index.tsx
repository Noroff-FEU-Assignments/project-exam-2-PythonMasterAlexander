import { Link } from "react-router-dom";
import ShowProfilesOnPage from "../../components/ShowProfilesOnPage";
export default function UserSearchPage() {
  return (
    <>
      <main>
        <section>
          <ShowProfilesOnPage />
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>To profile page</Link>
        </div>
      </main>
    </>
  );
}
