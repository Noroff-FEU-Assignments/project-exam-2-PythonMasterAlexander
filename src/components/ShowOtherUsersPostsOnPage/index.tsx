import viewPosts from "../../api/posts/viewPosts";
import { useEffect, useState } from "react";
import { UsersPosts } from "../../api/types";
import { API_SOCIAL_POST_ } from "../../api/constants";
import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowOtherUsersPostsOnPage() {
  const [userPosts, setUserPosts] = useState<UsersPosts[]>([]);
  const [postsError, setPostsError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userToken = loadUserFromLocalStorage("token");
  const URL: string = API_SOCIAL_POST_;
  useEffect(() => {
    const getPosts = async function () {
      if (userToken) {
        try {
          const fetchPosts = await viewPosts(URL, userToken);
          setUserPosts(fetchPosts);
        } catch (error) {
          setPostsError("Could not get users posts");
        } finally {
          setLoading(false);
        }
      }
    };
    getPosts();
  }, [URL, userToken]);
  return (
    <>
      <div className="mx-8 border-x-2 xl:mx-64 md:mx-32">
        {loading ? (
          <p>Loading...</p>
        ) : postsError ? (
          <p className="error-text-style">{postsError}</p>
        ) : (
          userPosts.slice(0, 10).map((post) => (
            <div className="border-b-2 p-8" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img
                src={post.media}
                alt={post.media ? "User uploaded image" : ""}
              />
              <Link
                className="btn-container uppercase font-bold font-poppins text-theme-color"
                to={`/other-users-post/${post.id}`}
              >
                check out
              </Link>
            </div>
          ))
        )}
        <div className="min-h-8"></div>
      </div>
    </>
  );
}
