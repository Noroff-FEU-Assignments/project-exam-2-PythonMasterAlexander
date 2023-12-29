import { useState } from "react";
import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { API_SOCIAL_DELETE_POST_WITH_ } from "../../api/constants";
import { remove } from "../../api/constants";
import removePost from "../../api/posts/removePost";
export default function UserHomePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const token: string = "token";
  const userToken = loadUserFromLocalStorage(token);
  //Need to change this value to be any id the user wants to delete
  const ACTION: string = "/9824";
  const URL: string = API_SOCIAL_DELETE_POST_WITH_ + ACTION;
  const clickToRemoveOnePost = async function () {
    try {
      const result = await removePost(URL, userToken, remove);
      return result;
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return (
    <>
      <main>
        Hello from User profile page
        <section>
          <div className="btn-container">
            <button onClick={clickToRemoveOnePost}>Delete post</button>
          </div>
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-search-page"}>To search page</Link>
        </div>
      </main>
    </>
  );
}
