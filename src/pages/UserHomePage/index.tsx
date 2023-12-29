import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserPostData } from "../../api/types";
import { userPostSchema } from "../../utils/userSchema";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { post } from "../../api/constants";
import createPost from "../../api/posts/createPost";
export default function UserProfilePage() {
  interface PostInterface {
    title: string;
    body: string;
    media: string;
    id: string;
  }
  const [userPosts, setUserPosts] = useState<PostInterface[]>([]);
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
      createPost(URL, userToken, data, post);
      reset();
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  console.log(userPosts);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setUserPosts(json);
      } catch (error) {
        console.log("Error fetching data:", error);
        return null;
      }
    }
    getPosts();
  }, [URL, userToken]);
  return (
    <>
      <main>
        hello from the user Home page
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
        <section>
          {userPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img src={post.media} />
            </div>
          ))}
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>To Profile page</Link>
        </div>
      </main>
    </>
  );
}
