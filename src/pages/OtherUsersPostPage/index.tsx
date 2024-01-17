import viewPost from "../../api/posts/viewPost";
import createComments from "../../api/posts/createComments";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userToken, API_SOCIAL_POST_, post } from "../../api/constants";
import { UserPost, CommentData, UserCommentOnPost } from "../../api/types";
export default function OtherUsersPostPage() {
  const [userPost, setUserPost] = useState<UserPost>();
  const [userCommentOnPost, setUserCommentOnPost] = useState<
    UserCommentOnPost | undefined
  >();
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
  const data: CommentData = {
    body: "Another test",
  };
  const commentOnPost = async function () {
    try {
      setUserCommentOnPost(
        await createComments(URL_COMMENT_ON_POST, userToken, post, data),
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userCommentOnPost);
  //Code works, need change the code so what is written in the input field is sent to the api
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
                <button onClick={commentOnPost}>Comment</button>
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
