import viewPost from "../../api/posts/viewPost";
import createComments from "../../api/posts/createComments";
import reactOnPosts from "../../api/posts/reactOnPosts";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_SOCIAL_POST_, post, put } from "../../api/constants";
import { UserPost, CommentData, UserCommentOnPost } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function OtherUsersPostPage() {
  const userToken = loadUserFromLocalStorage("token");
  const [userPost, setUserPost] = useState<UserPost>();
  const [userCommentOnPost, setUserCommentOnPost] = useState<
    UserCommentOnPost | undefined
  >();
  const [userInputComment, setUserInputComment] = useState("");
  const [postTitle, setPostTitle] = useState<string>("Post");
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
  }, [URL, userToken]);
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
  const REACT: string = "react";
  const SYMBOL: string = "👍";
  const REACT_ON_POST: string = `${URL}/${REACT}/${SYMBOL}`;
  const returnASymbolOnPost = async function () {
    try {
      await reactOnPosts(REACT_ON_POST, userToken, put);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userPost?.title) {
      setPostTitle(userPost.title);
    }
  }, [userPost]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The other users post page where the user can view posts by other profiles."
        />
        <title>{postTitle}</title>
      </Helmet>
      <main className="">
        <h1 className="heading-one-font-style text-center heading-one-font-style mx-8 xl:mx-64 md:mx-32 border-x-2 py-8 border-b-2">
          Post
        </h1>
        <div className="flex justify-center py-12 mx-8 border-x-2 xl:mx-64 md:mx-32">
          {userPost ? (
            <>
              <h2 className="heading-two-font-style">{userPost.title}</h2>
              <p>{userPost.body}</p>
              <span>{userPost._count.comments}</span>
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
