import ShowUserPostsOnProfilePage from "../../components/ShowUserPostsOnProfilePage";
import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  API_SOCIAL_DELETE_POST_WITH_,
  userToken,
  userLoginInformation,
} from "../../api/constants";
import { remove } from "../../api/constants";
import ShowPostMedia from "../../components/ShowPostMedia";
import removePost from "../../api/posts/removePost";

export default function UserHomePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { name, banner, avatar } = userLoginInformation;
  const ACTION: string = "/9841";
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
        <title>Profile</title>
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
          <div className="flex px-8 justify-center">
            <img
              className="inline rounded-full w-36"
              src={avatar}
              alt="any avatar the user have uploaded to display as user profile"
            />
            <h2 className="pl-8 heading-two-font-style self-center">{name}</h2>
          </div>
          <p className="p-8 font-poppins text-theme-color">About the user</p>
        </section>
        <section className="border-b-2 p-8 flex flex-col items-center">
          <h2 className="heading-two-font-style">Edit profile</h2>
          <ShowPostMedia />
        </section>
        <section>
          <h3 className="heading-three-font-style text-center main-border-styling border-b-2 p-8">
            User posts
          </h3>
          <ShowUserPostsOnProfilePage />
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
