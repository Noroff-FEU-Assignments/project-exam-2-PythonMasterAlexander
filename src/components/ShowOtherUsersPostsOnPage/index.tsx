import { useEffect, useState } from "react";
import { UsersPosts } from "../../api/types";
import { API_SOCIAL_POST_, userToken } from "../../api/constants";
import { Link } from "react-router-dom";
export default function ShowOtherUsersPostsOnPage() {
  const [userPosts, setUserPosts] = useState<UsersPosts[]>([]);
  const URL: string = API_SOCIAL_POST_;

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
  }, [URL]);
  return (
    <>
      <div>
        <h2 className="heading-two-font-style">Users posts</h2>
        {userPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.media} />
            <Link to={`/other-users-post-page/${post.id}`}>check out</Link>
          </div>
        ))}
      </div>
    </>
  );
}
