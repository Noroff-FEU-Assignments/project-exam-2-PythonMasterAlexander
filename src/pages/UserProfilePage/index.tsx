import { Link } from "react-router-dom";
export default function UserProfilePage() {
  return (
    <>
      <main>
        hello from the user profile page
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
