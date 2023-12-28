import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserPostData } from "../../api/types";
import { userPostSchema } from "../../utils/userSchema";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { loadUserFromLocalStorage } from "../../utils/storage";
import createPost from "../../api/posts/createPost";
export default function UserProfilePage() {
  const token: string = "token";
  const userToken = loadUserFromLocalStorage(token);

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
      createPost(URL, userToken, data);
      reset();
    } catch (error) {
      return null;
    }
  };
  return (
    <>
      <main>
        hello from the user profile page
        <section>
          <form
            id="create-user-post"
            className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
            onSubmit={handleSubmit(userCreatePost)}
          >
            <label>title</label>
            <input {...register("title")} className="primary-input-style" />
            <p>{errors.title?.message}</p>
            <label>body</label>
            <input {...register("body")} className="primary-input-style" />
            <label>media</label>
            <input {...register("media")} className="primary-input-style" />
            <button>submit</button>
          </form>
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
