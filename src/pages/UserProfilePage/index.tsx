import { Link } from "react-router-dom";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { loadUserFromLocalStorage } from "../../utils/storage";
import createPost from "../../api/posts/createPost";
export default function UserProfilePage() {
  const ACTION = "/posts";
  const token: string = "token";
  const URL = API_SOCIAL_CREATE_POST_WITH_ + ACTION;
  const userToken = loadUserFromLocalStorage(token);
  const post = {
    title: "hi",
    body: "my first post",
  };
  console.log(userToken);
  createPost(URL, userToken, post);
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
