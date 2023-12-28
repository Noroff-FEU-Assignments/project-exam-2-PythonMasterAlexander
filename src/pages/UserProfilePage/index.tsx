import { Link } from "react-router-dom";
//import { UserPostData } from "../../api/types";
//import { put } from "../../api/constants";
//import { API_SOCIAL_UPDATE_POST_WITH_ } from "../../api/constants";
//import updatePost from "../../api/posts/updatePost";
export default function UserHomePage() {
  //const ACTION: string = `${data.id}`;
  //const URL: string = API_SOCIAL_UPDATE_POST_WITH_ + ACTION;
  //console.log(URL);
  return (
    <>
      <main>
        Hello from User profile page
        <form></form>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
