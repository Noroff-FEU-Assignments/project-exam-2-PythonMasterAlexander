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
  /* To upgrad the user post, could not get this working
	const {
    register,
    handleSubmit,
	reset,
    formState: { errors },
  } = useForm<UpdateUserPost>({
    resolver: yupResolver(updateUserPostSchema)
  });
const onSubmit: SubmitHandler<UpdateUserPost> = async (formData, e) => {
	const id = formData;
	const URL = `${API_SOCIAL_UPDATE_POST_WITH_}/${id}`;
    try {
      await updatePost(URL, userToken, put, formData);
      reset();
    } catch (error) {
      setErrorMessage("Something went wrong");
      setIsError(true);
    }
  };
  */

  return (
    <>
      <div className="mx-8 border-x-2 xl:mx-64 md:mx-32">
        {userPostData ? (
          <>
            {userPostData.map((postData: UserPost) => (
              <div
                className="flex p-8 flex-col border-b-2 gap-8 xl:flex-row xl:justify-center items-center"
                key={postData.id}
              >
                <img
                  className="inline rounded-full w-36"
                  src={avatar ? avatar : defaultAvatar}
                  alt={postData.media ? "User avatar" : undefined}
                />
                <h4 className="heading-four-font-style">{postData.title}</h4>
                <p className="paragraph-font-style">{postData.body}</p>

                <form key={postData.id}>
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
