import viewPost from "../../api/posts/viewPost";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  API_SOCIAL_DELETE_POST_WITH_,
  userToken,
  API_SOCIAL_PROFILES,
  userLoginInformation,
} from "../../api/constants";
import { UserPost } from "../../api/types";
import { remove } from "../../api/constants";
import ShowPostMedia from "../../components/ShowPostMedia";
import LogOutUser from "../../components/LogOutUser";
import removePost from "../../api/posts/removePost";
export default function UserHomePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [userPostData, setUserPostData] = useState<[UserPost]>();
  const { name } = userLoginInformation;
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}/posts`;
  useEffect(() => {
    const showEachUserPosts = async function () {
      try {
        const userPosts = await viewPost(SHOW_USER_POSTS, userToken);
        setUserPostData(userPosts);
      } catch (error) {
        console.log(error);
      }
    };
    showEachUserPosts();
  }, [SHOW_USER_POSTS]);
  //A put request to update each post
  //Buttons for updating
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
        <section>
          {userPostData ? (
            <>
              {userPostData.map((postData) => (
                <div key={postData.id}>
                  <h1>{postData.title}</h1>
                </div>
              ))}
            </>
          ) : (
            <p>Loading</p>
          )}
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
