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
  const { name, banner, avatar } = userLoginInformation;
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}${API_SOCIAL_POSTS}`;
  const ACTION: string = "/9841";
  const URL: string = API_SOCIAL_DELETE_POST_WITH_ + ACTION;
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
  //Here use the id number from each post
  //Change the test post to the value the user sends in
  const TEST_POST: string = "9839";
  const UPDATE_POST: string = `${API_SOCIAL_DELETE_POST_WITH_}/${TEST_POST}`;
  const data: UpdateUserPost = {
    title: "fuck off",
    body: "test body",
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
  console.log(userPostData);
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
        <section className="border-b-2">
          <h1 className="text-center heading-one-font-style py-8 border-b-2">
            Profile
          </h1>
          <div className="flex justify-center py-12">
            <img
              className="object-cover max-h-96 w-full"
              src={banner}
              alt="any banner the user have uploaded to display as user profile"
            />
          </div>
          <div className="flex px-8 ">
            <img
              className="inline rounded-full w-36"
              src={avatar}
              alt="any avatar the user have uploaded to display as user profile"
            />
            <h3 className="pl-8 self-center">{name}</h3>
          </div>
          <p className="p-8">About the user</p>
        </section>
        <section className="border-b-2 flex flex-col items-center">
          <h2>Edit profile</h2>
          <ShowPostMedia />
        </section>
        <section className="main-border-styling">
          <h3>Users posts</h3>
          {userPostData ? (
            <>
              {userPostData.map((postData) => (
                <div key={postData.id}>
                  <img
                    className="inline rounded-full w-36"
                    src={avatar}
                    alt="any avatar the user have uploaded to display as user profile"
                  />
                  <h3>{postData.title}</h3>
                  <div>
                    <input />
                    <input />
                    <div className="btn-container">
                      <button
                        className="text-sm capitalize font-medium font-poppins text-theme-color text-sm"
                        onClick={updateOnePost}
                      >
                        upgrade
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Loading</p>
          )}
          <div className="btn-container">
            <button
              className="uppercase font-poppins font-bold text-theme-color text-base"
              onClick={clickToRemoveOnePost}
            >
              Delete post
            </button>
            <div>{errorMessage && <p>{errorMessage}</p>}</div>
          </div>
        </section>
      </main>
    </>
  );
}
