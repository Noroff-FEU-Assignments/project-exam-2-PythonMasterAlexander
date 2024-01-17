import viewPost from "../../api/posts/viewPost";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userToken, API_SOCIAL_POST_ } from "../../api/constants";
import { UserPost } from "../../api/types";
export default function OtherUsersPostPage() {
  const [userPost, setUserPost] = useState<UserPost>();
  const { id } = useParams();
  const URL: string = `${API_SOCIAL_POST_}/${id}`;
  useEffect(() => {
    const viewSinglePost = async function () {
      try {
        setUserPost(await viewPost(URL, userToken));
      } catch (error) {
        console.log(error);
      }
    };
    viewSinglePost();
  }, [URL]);
  console.log(userPost);
  return (
    <>
      <section>
        <div>
          {userPost ? (
            <>
              <h1>{userPost.title}</h1>
              <p>{userPost.body}</p>
              {/*Insert other parts of the post here*/}
            </>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </section>
      <Link to={"/user-home-page"}>To home page</Link>
    </>
  );
}
