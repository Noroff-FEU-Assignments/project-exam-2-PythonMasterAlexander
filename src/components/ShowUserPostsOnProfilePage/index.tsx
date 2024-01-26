import viewPost from "../../api/posts/viewPost";
import updatePost from "../../api/posts/updatePost";
import { useEffect, useState } from "react";
import {
  API_SOCIAL_DELETE_POST_WITH_,
  API_SOCIAL_PROFILES,
  API_SOCIAL_POSTS,
  userLoginInformation,
  userToken,
  put,
} from "../../api/constants";
import { UserPost, UpdateUserPost } from "../../api/types";
export default function ShowUserPostsOnProfilePage() {
  const [userPostData, setUserPostData] = useState<[UserPost] | undefined>();
  const { name, avatar } = userLoginInformation;
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}${API_SOCIAL_POSTS}`;
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
  return (
    <>
      <div className="main-border-styling">
        {userPostData ? (
          <>
            {userPostData.map((postData: UserPost) => (
              <div key={postData.id}>
                <img
                  className="inline rounded-full w-36"
                  src={avatar}
                  alt="any avatar the user have uploaded to display as user profile"
                />
                <h4 className="">{postData.title}</h4>
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
          <p className="error-text-style">Loading posts</p>
        )}
      </div>
    </>
  );
}
