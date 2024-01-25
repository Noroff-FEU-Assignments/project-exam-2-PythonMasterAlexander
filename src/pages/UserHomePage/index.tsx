import createPost from "../../api/posts/createPost";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserPostData } from "../../api/types";
import { userPostSchema } from "../../utils/userSchema";
import { API_SOCIAL_CREATE_POST_WITH_ } from "../../api/constants";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { post } from "../../api/constants";
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
        return null;
      }
    }
    getPosts();
  }, [URL, userToken]);
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
          <div className="flex justify-center">
            <form
              id="create-user-post"
              className="p-8"
              onSubmit={handleSubmit(userCreatePost)}
            >
              <div>
                <label className="form-label-styling">Post title</label>
                <input {...register("title")} className="primary-input-style" />
                <p>{errors.title?.message}</p>
              </div>
              <div>
                <label className="form-label-styling">Post media url</label>
                <input {...register("media")} className="primary-input-style" />
              </div>
              <div>
                <label className="form-label-styling">Post text</label>
                <input {...register("body")} className="primary-input-style" />
              </div>
              <div className="btn-container border-[#cbd5e1] w-48">
                <button className="uppercase font-poppins font-bold text-theme-color text-base">
                  post
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="main-border-styling">
          <div>
            <h2 className="heading-two-font-style">Users posts</h2>
            {userPosts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <img src={post.media} />
                <Link to={`/other-users-post-page/${post.id}`}>To post</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
