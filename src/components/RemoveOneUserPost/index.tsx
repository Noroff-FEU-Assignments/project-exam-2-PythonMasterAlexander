import removePost from "../../api/posts/removePost";
import { useState } from "react";
import { remove, API_SOCIAL_DELETE_POST_WITH_ } from "../../api/constants";
import { RemoveOneUserPostType } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

const RemoveOneUserPost: React.FC<RemoveOneUserPostType> = ({ id }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const handleClickToRemovePost = async function () {
    const userToken: string = loadUserFromLocalStorage("token");
    const ACTION: string = `/${id}`;
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
      <div className="btn-container self-center xl:self-baseline">
        <button
          className="secondary-button-style"
          onClick={handleClickToRemovePost}
        >
          Delete post
        </button>
        <div>
          {errorMessage && <p className="error-text-style">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
};
export default RemoveOneUserPost;
