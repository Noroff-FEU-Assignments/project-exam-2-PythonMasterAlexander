import createPost from "../../api/posts/createPost";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserPostData } from "../../api/types";
import { userPostSchema } from "../../utils/userSchema";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { post, userToken } from "../../api/constants";
import ShowOtherUsersPostsOnPage from "../../components/ShowOtherUsersPostsOnPage";
export default function UserProfilePage() {
  const ACTION = "/posts";
  const URL = API_SOCIAL_CREATE_POST_WITH_ + ACTION;
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
      console.log(error);
      return null;
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The user home page where they are taken to after doing the log in. This page shows what other users they are following are doing. From here the user can navigate to the profile page."
        />
        <title>Home Page</title>
      </Helmet>
      <main>
        <section className="border-b-2">
          <h1 className="text-center heading-one-font-style py-8 border-b-2">
            Create post
          </h1>
          <div className="flex justify-center p-8">
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
        </section>
        <section className="main-border-styling">
          <ShowOtherUsersPostsOnPage />
        </section>
      </main>
    </>
  );
}
