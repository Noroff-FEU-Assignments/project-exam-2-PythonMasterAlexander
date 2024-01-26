import { Helmet } from "react-helmet";
import ShowProfilesOnPage from "../../components/ShowProfilesOnPage";
export default function UserSearchPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is the search page on Net Social where the user search for other users and then the user can navigate to them."
        />
        <title>Search Page</title>
      </Helmet>
      <main className="main-border-styling">
        <section>
          <ShowProfilesOnPage />
        </section>
      </main>
    </>
  );
}
