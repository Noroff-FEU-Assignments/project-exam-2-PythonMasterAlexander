import { Link } from "react-router-dom";
export default function UserHomePage() {
  return (
    <>
      <main>
        Hello from User profile page
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
