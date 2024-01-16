import { Link } from "react-router-dom";
export default function OtherUsersPostPage() {
  return (
    <>
      <h1>hello from other users post page</h1>
      <Link to={"/user-profile-page"}></Link>
    </>
  );
}
