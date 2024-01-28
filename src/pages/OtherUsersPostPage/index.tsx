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

  console.log(userPost);
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
      <main className="border-b-2">
        <h1 className="heading-one-font-style text-center heading-one-font-style mx-8 xl:mx-64 md:mx-32 border-x-2 py-8 border-b-2">
          Post
        </h1>
        <div className="flex flex-col justify-center gap-8 p-8 py-48 mx-8 border-b-2 border-x-2 xl:mx-64 md:mx-32">
          {userPost ? (
            <>
              <h2 className="heading-two-font-style">{userPost.title}</h2>
              <p className="font-medium font-poppins text-theme-color">
                {userPost.body}
              </p>
              <span>{userPost._count.comments}</span>
              <div className="flex flex-col">
                <input
                  className="primary-input-style"
                  value={userInputComment}
                  onChange={(event) => setUserInputComment(event.target.value)}
                />
                <div className="btn-container">
                  <button
                    className="uppercase font-poppins font-bold text-theme-color text-base"
                    onClick={commentOnPost}
                  >
                    Comment
                  </button>
                </div>
                <div className="">
                  <button className="" onClick={returnASymbolOnPost}>
                    Like
                  </button>
                </div>
                <div>
                  <i className="fa-solid fa-thumbs-up"></i>
                </div>
              </div>
            </>
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div className="min-h-8 mx-8 border-x-2 xl:mx-64 md:mx-32"></div>
      </main>
    </>
  );
}
