import { Link } from "react-router-dom";
export default function UserHomePage() {
  return (
    <>
      <main>
        Hello from User Home page
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>profile page</Link>
        </div>
      </main>
    </>
  );
}
