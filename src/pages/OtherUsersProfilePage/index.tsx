import { Link } from "react-router-dom";
export default function OtherUsersProfilePage() {
  return (
    <>
      <main>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
