import RemoveOneUserPost from "../RemoveOneUserPost";
import viewPost from "../../api/posts/viewPost";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES, API_SOCIAL_POSTS } from "../../api/constants";
import { UserPost } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowUserPostsOnProfilePage() {
  const [userPostData, setUserPostData] = useState<UserPost[]>([]);
  const { name, avatar } = loadUserFromLocalStorage("user");
  const userToken: string = loadUserFromLocalStorage("token");
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
      <div className="main-border-styling">
        {userPostData ? (
          <>
            {userPostData.map((postData: UserPost) => (
              <div
                className="flex flex-col gap-8 xl:flex-row xl:justify-center items-center"
                key={postData.id}
              >
                <img
                  className="inline rounded-full w-36"
                  src={avatar}
                  alt="any avatar the user have uploaded to display as user profile"
                />
                <h4 className="">{postData.title}</h4>
                <p>{postData.body}</p>

                <form key={postData.id}>
                  <div>
                    <input
                      className="primary-input-style"
                      type="text"
                      placeholder="Update title"
                    />
                    <p className="error-text-style">{}</p>
                  </div>

                  <div>
                    <input
                      className="primary-input-style"
                      type="text"
                      placeholder="Update body"
                    />
                    <p className="error-text-style">{}</p>
                  </div>

                  <div className="btn-container">
                    <button
                      className="text-sm capitalize font-regular font-poppins text-theme-color text-sm"
                      type="submit"
                    >
                      upgrade
                    </button>
                  </div>
                </form>
                <RemoveOneUserPost id={postData.id} />
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
