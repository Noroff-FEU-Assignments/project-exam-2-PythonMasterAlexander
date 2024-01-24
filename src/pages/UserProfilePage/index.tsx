import viewPost from "../../api/posts/viewPost";
import updatePost from "../../api/posts/updatePost";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  API_SOCIAL_DELETE_POST_WITH_,
  userToken,
  API_SOCIAL_PROFILES,
  userLoginInformation,
  API_SOCIAL_POSTS,
  put,
} from "../../api/constants";
import { UserPost, UpdateUserPost } from "../../api/types";
import { remove } from "../../api/constants";
import ShowPostMedia from "../../components/ShowPostMedia";
import removePost from "../../api/posts/removePost";
export default function UserHomePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [userPostData, setUserPostData] = useState<[UserPost] | undefined>();
  console.log(userLoginInformation);
  const { name } = userLoginInformation;
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}${API_SOCIAL_POSTS}`;
  const ACTION: string = "/9841";
  const URL: string = API_SOCIAL_DELETE_POST_WITH_ + ACTION;
  console.log(URL);
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
  const TEST_POST: string = "9839";
  const UPDATE_POST: string = `${API_SOCIAL_DELETE_POST_WITH_}/${TEST_POST}`;
  const data: UpdateUserPost = {
    title: "string",
    body: "string",
    tags: ["string"],
    media: "https://url.com/image.jpg",
  };
  const updateOnePost = async function () {
    try {
      await updatePost(UPDATE_POST, userToken, data, put);
    } catch (error) {
      console.log(error);
    }
  };
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
        <h1 className="heading-one-font-style">Profile</h1>
        <section>
          <div className="btn-container">
            <button onClick={clickToRemoveOnePost}>Delete post</button>
          </div>
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
        </section>
        <section>
          <ShowPostMedia />
        </section>
        <section>
          {userPostData ? (
            <>
              {userPostData.map((postData) => (
                <div key={postData.id}>
                  <h2>{postData.title}</h2>
                </div>
              ))}
            </>
          ) : (
            <p>Loading</p>
          )}
        </section>
        <button onClick={updateOnePost}>Update post</button>
      </main>
    </>
  );
}
