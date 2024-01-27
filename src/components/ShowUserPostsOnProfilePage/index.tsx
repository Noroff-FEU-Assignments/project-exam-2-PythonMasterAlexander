import RemoveOneUserPost from "../RemoveOneUserPost";
import viewPost from "../../api/posts/viewPost";
import { useEffect, useState } from "react";
import {
  API_SOCIAL_PROFILES,
  API_SOCIAL_POSTS,
  userLoginInformation,
  userToken,
} from "../../api/constants";
import { UserPost, UpdateUserPost } from "../../api/types";
import updateOnePost from "../../utils/updateOnePost";

export default function ShowUserPostsOnProfilePage() {
  const [userPostData, setUserPostData] = useState<UserPost[]>([]);
  const { name, avatar } = userLoginInformation;
  const SHOW_USER_POSTS: string = `${API_SOCIAL_PROFILES}/${name}${API_SOCIAL_POSTS}`;
  useEffect(() => {
    const showEachUserPosts = async function () {
      try {
        const userPosts = await viewPost(SHOW_USER_POSTS, userToken);
        setUserPostData(userPosts || []);
      } catch (error) {
        console.log(error);
      }
    };
    showEachUserPosts();
  }, [SHOW_USER_POSTS]);
  const [updateUserPosts, setUpdateUserPosts] = useState<{
    [key: number]: UpdateUserPost;
  }>({});
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const { name, value } = e.target;
    setUpdateUserPosts((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        [name]: value,
      },
    }));
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
                <p>{postData.body}</p>
                <div>
                  <input
                    className="primary-input-style"
                    type="text"
                    name="title"
                    placeholder="Update title"
                    value={updateUserPosts[postData.id]?.title || ""}
                    onChange={(e) => handleInputChange(e, postData.id)}
                  />
                  <input
                    className="primary-input-style"
                    type="text"
                    name="body"
                    placeholder="Update body"
                    value={updateUserPosts[postData.id]?.body || ""}
                    onChange={(e) => handleInputChange(e, postData.id)}
                  />
                  <div className="btn-container">
                    <button
                      className="text-sm capitalize font-regular font-poppins text-theme-color text-sm"
                      onClick={() =>
                        updateOnePost(updateUserPosts, postData.id)
                      }
                    >
                      upgrade
                    </button>
                  </div>
                  <RemoveOneUserPost id={postData.id} />
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
