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

  //Changed the code here, now it uses the token directly from local storage instead of importing the userToken from the file ../../api/constants
  //Also uses a if statement to see if the token exists
  const userToken = loadUserFromLocalStorage("token");
  const URL: string = API_SOCIAL_POST_;
  useEffect(() => {
    const getPosts = async function () {
      if (userToken) {
        try {
          const fetchPosts = await viewPosts(URL, userToken);
          console.log("Fetched Posts:", fetchPosts);
          setUserPosts(fetchPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
          setPostsError("Could not get users posts");
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No user token");
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
          userPosts.map((post) => (
            <div className="border-b-2 p-8" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img
                src={post.media}
                alt={post.media ? "User uploaded image" : ""}
              />
              <Link to={`/other-users-post/${post.id}`}>check out</Link>
            </div>
          ))
        )}
        <div className="min-h-8"></div>
      </div>
    </>
  );
}
