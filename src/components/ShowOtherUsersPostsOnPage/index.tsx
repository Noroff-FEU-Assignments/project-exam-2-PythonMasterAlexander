import { useEffect, useState } from "react";
import { UsersPosts } from "../../api/types";
import { API_SOCIAL_POST_, userToken } from "../../api/constants";
import { Link } from "react-router-dom";
import viewPosts from "../../api/posts/viewPosts";
export default function ShowOtherUsersPostsOnPage() {
  const [userPosts, setUserPosts] = useState<UsersPosts[]>([]);
  const [postsError, setPostsError] = useState<string | null>(null);
  const URL: string = API_SOCIAL_POST_;
  useEffect(() => {
    const getPosts = async function () {
      try {
        const fetchPosts = await viewPosts(URL, userToken);
        setUserPosts(fetchPosts);
      } catch (error) {
        setPostsError("Could not get users posts");
      }
    };
    getPosts();
  }, [URL]);
  return (
    <>
      <div>
        <h2 className="heading-two-font-style">Users posts</h2>
        {postsError ? (
          <p className="error-text-style">{postsError}</p>
        ) : (
          userPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img src={post.media} alt={post.title} />
              <Link to={`/other-users-post-page/${post.id}`}>check out</Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}
