import ShowProfilesOnPage from "../../components/ShowProfilesOnPage";
import { Helmet } from "react-helmet";

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
        <title>Search</title>
      </Helmet>
      <main className="mx-8 border-x-2 xl:mx-64 md:mx-32">
        <section>
          <h1 className="text-center heading-one-font-style py-8 border-b-2">
            Search profiles
          </h1>
          <ShowProfilesOnPage />
        </section>
      </main>
    </>
  );
}
