import defaultAvatar from "../../resources/avatar.svg";
import RemoveOneUserPost from "../RemoveOneUserPost";
import viewPost from "../../api/posts/viewPost";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES, API_SOCIAL_POSTS } from "../../api/constants";
import { UserPost } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowUserPostsOnProfilePage() {
  const [userPostData, setUserPostData] = useState<UserPost[]>([]);
  const { name, avatar } = loadUserFromLocalStorage("user");
  const [postsError, setPostsError] = useState<string>("");
  const userToken: string = loadUserFromLocalStorage("token");
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}${API_SOCIAL_POSTS}`;
  useEffect(() => {
    const fetchAndShowEachUserPosts = async function () {
      try {
        const userPosts = await viewPost(SHOW_USER_POSTS, userToken);
        setUserPostData(userPosts || []);
      } catch (error) {
        setPostsError("Something is wrong");
      }
    };
    fetchAndShowEachUserPosts();
  }, [SHOW_USER_POSTS, userToken]);

  return (
    <>
      <div className="mx-8 border-x-2 xl:mx-64 md:mx-32">
        {userPostData ? (
          <>
            {userPostData.map((postData: UserPost) => (
              <div
                className="flex p-8 flex-col border-b-2 gap-8 xl:justify-center items-center"
                key={postData.id}
              >
                <h4 className="heading-four-font-style xl:w-full">
                  {postData.title}
                </h4>
                <article className="gap-8 flex flex-col xl:flex-row xl:w-full xl:justify-between">
                  <h5 className="heading-four-font-style">Post information</h5>
                  <p className="paragraph-font-style">{postData.body}</p>
                  <img
                    className="inline w-12 md:w-15 xl:w-20"
                    src={avatar ? avatar : defaultAvatar}
                    alt={postData.media ? "User avatar" : undefined}
                  />
                </article>
                <form
                  key={postData.id}
                  className="flex xl:justify-between xl:w-full xl:flex-row flex-col gap-8"
                >
                  <div>
                    <input
                      className="primary-input-style"
                      type="text"
                      placeholder="Enter updated title"
                    />
                  </div>

                  <div>
                    <input
                      className="primary-input-style"
                      type="text"
                      placeholder="Enter updated body"
                    />
                  </div>

                  <div className="btn-container">
                    <button className="secondary-button-style" type="submit">
                      upgrade
                    </button>
                  </div>
                </form>
                <RemoveOneUserPost id={postData.id} />
              </div>
            ))}
          </>
        ) : (
          <p className="error-text-style ">{postsError}</p>
        )}
      </div>
    </>
  );
}
