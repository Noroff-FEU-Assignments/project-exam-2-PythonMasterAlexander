import createPost from "../../api/posts/createPost";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { UserPostData } from "../../api/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userPostSchema } from "../../utils/userSchema";
import { post } from "../../api/constants";
import { useState } from "react";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function CreatePost() {
  const [errorCreatingPost, setErrorCreatingPost] = useState<string | null>(
    null,
  );
  const userToken: string = loadUserFromLocalStorage("token");
  const ACTION: string = "/posts";
  const URL: string = API_SOCIAL_CREATE_POST_WITH_ + ACTION;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserPostData>({
    resolver: yupResolver(userPostSchema),
  });
  const userCreatePost = async function (data: UserPostData) {
    try {
      createPost(URL, userToken, data, post);
      reset();
    } catch (error) {
      setErrorCreatingPost("Could not post");
    }
  };

  return (
    <>
      <section>
        <h1 className="mx-8 xl:mx-64 md:mx-32 border-x-2 text-center heading-one-font-style py-8 border-b-2">
          Create post
        </h1>
        <div className="flex justify-center p-8 mx-8 border-x-2 xl:mx-64 md:mx-32">
          <form
            id="create-user-post"
            className="flex flex-col md:flex-row flex-wrap gap-8 md:justify-between"
            onSubmit={handleSubmit(userCreatePost)}
          >
            <div className="md:w-2/5">
              <label className="form-label-styling">Post title</label>
              <input
                {...register("title")}
                className="primary-input-style w-full"
              />
              <p className="error-text-style">{errors.title?.message}</p>
            </div>
            <div className="md:w-2/5">
              <label className="form-label-styling">Post media url</label>
              <input
                {...register("media")}
                className="primary-input-style w-full"
              />
            </div>
            <div className="md:w-full xl:w-2/5">
              <label className="form-label-styling">Post text</label>
              <input
                {...register("body")}
                className="primary-input-style w-full"
              />
            </div>
            <div className="btn-container border-[#cbd5e1] md:w-1/2 xl:w-2/5 h-11 xl:self-end">
              <button className="uppercase font-poppins font-bold text-theme-color text-base">
                post
              </button>
            </div>
          </form>
        </div>
        {errorCreatingPost && (
          <div className="error-text-style">{errorCreatingPost}</div>
        )}
      </section>
    </>
  );
}
