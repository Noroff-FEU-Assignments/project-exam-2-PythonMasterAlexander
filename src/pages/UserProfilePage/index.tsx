import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { API_SOCIAL_DELETE_POST_WITH_, userToken } from "../../api/constants";
import { remove } from "../../api/constants";
import ShowPostMedia from "../../components/ShowPostMedia";
import LogOutUser from "../../components/LogOutUser";
import removePost from "../../api/posts/removePost";
export default function UserHomePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The user profile page, this page show the information about the user."
        />
        <title>Profile Page</title>
      </Helmet>
      <main>
        Hello from User profile page
        <section>
          <div className="btn-container">
            <button onClick={clickToRemoveOnePost}>Delete post</button>
          </div>
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
        </section>
        <section>
          <ShowPostMedia />
        </section>
        <LogOutUser />
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
