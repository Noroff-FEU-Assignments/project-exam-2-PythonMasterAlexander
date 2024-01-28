import updatePost from "../../api/posts/updatePost";
import { API_SOCIAL_DELETE_POST_WITH_, put } from "../../api/constants";
import { UpdateUserPost } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

const userToken = loadUserFromLocalStorage("token");
const updateOnePost = async function (
  updateUserPosts: { [key: number]: UpdateUserPost },
  id: number,
) {
  const POST_ID: number = id;
  const UPDATE_POST: string = `${API_SOCIAL_DELETE_POST_WITH_}/${POST_ID}`;
  try {
    await updatePost(UPDATE_POST, userToken, updateUserPosts[id], put);
  } catch (error) {
    console.log(error);
  }
};
export default updateOnePost;
