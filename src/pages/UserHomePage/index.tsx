import ShowOtherUsersPostsOnPage from "../../components/ShowOtherUsersPostsOnPage";
import CreatePost from "../../components/CreatePost";
import { Helmet } from "react-helmet";

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
        <title>Home</title>
      </Helmet>
      <main>
        <CreatePost />
        <section>
          <h2 className="heading-two-font-style text-center border-t-2 border-b-2 main-border-styling">
            Users posts
          </h2>
          <ShowOtherUsersPostsOnPage />
        </section>
      </main>
    </>
  );
}
