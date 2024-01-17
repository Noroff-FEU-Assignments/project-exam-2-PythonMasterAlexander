import viewPost from "../../api/posts/viewPost";
import createComments from "../../api/posts/createComments";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userToken, API_SOCIAL_POST_, post } from "../../api/constants";
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
  const URL_COMMENT_ON_POST: string = `${URL}/comment`;
  console.log(URL_COMMENT_ON_POST);
  console.log(userPost);
  //Create a input for writing a comment on a post
  //Create a button
  //When the user writes and click the button a post event happends
  //The post request must have a body in the request
  //Need to create a submit event
  const commentOnPost = async function () {
    try {
      await createComments(URL, userToken, post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div>
          {userPost ? (
            <>
              <h1>{userPost.title}</h1>
              <p>{userPost.body}</p>
              {/*Insert other parts of the post here*/}
              <div>
                <input className="primary-input-style" />
                <button onClick={commentOnPost}></button>
              </div>
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
