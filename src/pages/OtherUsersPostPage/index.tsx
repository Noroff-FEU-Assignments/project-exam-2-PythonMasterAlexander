import viewPost from "../../api/posts/viewPost";
import createComments from "../../api/posts/createComments";
import reactOnPosts from "../../api/posts/reactOnPosts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userToken, API_SOCIAL_POST_, post, put } from "../../api/constants";
import { UserPost, CommentData, UserCommentOnPost } from "../../api/types";
export default function OtherUsersPostPage() {
  const [userPost, setUserPost] = useState<UserPost>();
  const [userCommentOnPost, setUserCommentOnPost] = useState<
    UserCommentOnPost | undefined
  >();
  const [userInputComment, setUserInputComment] = useState("");
  const { id } = useParams();
  console.log(userCommentOnPost);
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
  const data: CommentData = {
    body: userInputComment,
  };
  const commentOnPost = async function () {
    try {
      setUserCommentOnPost(
        await createComments(URL_COMMENT_ON_POST, userToken, post, data),
      );
      setUserInputComment("");
    } catch (error) {
      console.log(error);
    }
  };
  // Code works
  const REACT: string = "react";
  const SYMBOL: string = "👍";
  const REACT_ON_POST = `${URL}/${REACT}/${SYMBOL}`;
  console.log(REACT_ON_POST);
  const returnASymbolOnPost = async function () {
    try {
      await reactOnPosts(REACT_ON_POST, userToken, put);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main>
        <h1 className="heading-one-font-style">Post</h1>
        <div>
          {userPost ? (
            <>
              <h1>{userPost.title}</h1>
              <p>{userPost.body}</p>
              <span>{userPost._count.comments}</span>
              {/*Insert other parts of the post here*/}
              <div>
                <input
                  className="primary-input-style"
                  value={userInputComment}
                  onChange={(event) => setUserInputComment(event.target.value)}
                />
                <button onClick={commentOnPost}>Comment</button>
                <button onClick={returnASymbolOnPost}>Like</button>
              </div>
            </>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </main>
    </>
  );
}
