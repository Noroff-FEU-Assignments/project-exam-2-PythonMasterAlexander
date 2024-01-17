import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import viewPost from "../../api/posts/viewPost";
import { userToken, API_SOCIAL_POST_ } from "../../api/constants";
export default function OtherUsersPostPage() {
  const { id } = useParams();
  const URL: string = `${API_SOCIAL_POST_}/${id}`;
  console.log(URL);
  useEffect(() => {
    const viewSinglePost = async function () {
      try {
        await viewPost(URL, userToken);
      } catch (error) {
        console.log(error);
      }
    };
    viewSinglePost();
  }, [URL]);

  return (
    <>
      <Link to={"/user-home-page"}>To home page</Link>
    </>
  );
}
