import viewPosts from "../../api/posts/viewPosts";
import defaultAvatar from "../../resources/avatar.svg";
import { useEffect, useState } from "react";
import { UsersPosts } from "../../api/types";
import { API_SOCIAL_POST_ } from "../../api/constants";
import { Link } from "react-router-dom";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowOtherUsersPostsOnPage() {
  const [userPosts, setUserPosts] = useState<UsersPosts[]>([]);
  const [postsError, setPostsError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userToken: string = loadUserFromLocalStorage("token");
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
          <p className="paragraph-font-style">Loading...</p>
        ) : postsError ? (
          <p className="error-text-style">{postsError}</p>
        ) : (
          userPosts.slice(0, 10).map((post) => (
            <div
              className="border-b-2 p-8 flex flex-col justify-between flex-wrap gap-8 xl:flex-row"
              key={post.id}
            >
              <h2 className="heading-two-font-style">{post.title}</h2>
              <div>
                <p className="pb-2 paragraph-font-style">{post.body}</p>
                <img
                  className={`inline rounded-full w-12 ${
                    !post.media && "inline rounded-none w-7"
                  }`}
                  src={post.media ? post.media : defaultAvatar}
                  alt={post.media ? "User uploaded image" : undefined}
                />
              </div>
              <div>
                <Link
                  className="btn-container uppercase font-bold font-poppins text-theme-color"
                  to={`/other-users-post/${post.id}`}
                >
                  check out
                </Link>
              </div>
            </div>
          ))
        )}
        <div className="min-h-8"></div>
      </div>
    </>
  );
}
