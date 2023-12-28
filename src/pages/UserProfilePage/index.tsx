import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { API_SOCIAL_DELETE_POST_WITH_ } from "../../api/constants";
import { remove } from "../../api/constants";
import removePost from "../../api/posts/removePost";
export default function UserHomePage() {
  const token: string = "token";
  const userToken = loadUserFromLocalStorage(token);
  //Need to change this value to be any id the user wants to delete
  const ACTION: string = "/9823";
  const URL: string = API_SOCIAL_DELETE_POST_WITH_ + ACTION;
  removePost(URL, userToken, remove);
  return (
    <>
      <main>
        Hello from User profile page
        <section>
          <button>Delete post</button>
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
