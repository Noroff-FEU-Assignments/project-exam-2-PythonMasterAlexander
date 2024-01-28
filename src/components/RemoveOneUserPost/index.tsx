import removePost from "../../api/posts/removePost";
import { useState } from "react";
import { remove, API_SOCIAL_DELETE_POST_WITH_ } from "../../api/constants";
import { RemoveOneUserPostType } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

const RemoveOneUserPost: React.FC<RemoveOneUserPostType> = ({ id }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const clickToRemoveOnePost = async function () {
    const userToken = loadUserFromLocalStorage("token");
    const ACTION = `/${id}`;
    const URL: string = API_SOCIAL_DELETE_POST_WITH_ + ACTION;
    try {
      const result = await removePost(URL, userToken, remove);
      return result;
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  return (
    <>
      <div className="btn-container">
        <button
          className="uppercase font-poppins font-bold text-theme-color text-base"
          onClick={clickToRemoveOnePost}
        >
          Delete post
        </button>
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
      </div>
    </>
  );
};
export default RemoveOneUserPost;
