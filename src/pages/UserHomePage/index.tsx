import ShowOtherUsersPostsOnPage from "../../components/ShowOtherUsersPostsOnPage";
import { Helmet } from "react-helmet";
import CreatePost from "../../components/CreatePost";
export default function UserProfilePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The user home page where they are taken to after doing the log in. This page shows what other users they are following are doing. From here the user can navigate to the profile page."
        />
        <title>Home Page</title>
      </Helmet>
      <main>
        <CreatePost />
        <section className="main-border-styling">
          <ShowOtherUsersPostsOnPage />
        </section>
      </main>
    </>
  );
}
