import ShowOtherUsersProfileOnPage from "../../components/ShowOtherUsersProfileOnPage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function OtherUsersProfilePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is the Net Social page that shows other users on Net Social. The user must first search and click the users first."
        />
        <title>User</title>
      </Helmet>
      <main>
        <section>
          <ShowOtherUsersProfileOnPage />
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
