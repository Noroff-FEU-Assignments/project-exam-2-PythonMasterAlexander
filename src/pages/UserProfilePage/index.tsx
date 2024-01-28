import ShowPostMedia from "../../components/ShowPostMedia";
import ShowUserPostsOnProfilePage from "../../components/ShowUserPostsOnProfilePage";
import { Helmet } from "react-helmet";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function UserHomePage() {
  const { name, banner, avatar } = loadUserFromLocalStorage("user");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The user profile page, this page show the information about the user."
        />
        <title>Profile</title>
      </Helmet>
      <main>
        <section className="border-b-t-2">
          <h1 className="text-center heading-one-font-style mx-8 xl:mx-64 md:mx-32 border-x-2 py-8 border-b-2">
            Profile
          </h1>
          <div className="flex justify-center py-12 mx-8 border-x-2 xl:mx-64 md:mx-32">
            <img
              className="object-cover max-h-96 w-full"
              src={banner}
              alt="any banner the user have uploaded to display as user profile"
            />
          </div>
          <div className="flex px-8 justify-center p-8 border-x-2 mx-8 xl:mx-64 md:mx-32">
            <img
              className="inline rounded-full w-36"
              src={avatar}
              alt="any avatar the user have uploaded to display as user profile"
            />
            <h2 className="pl-8 heading-two-font-style self-center">{name}</h2>
            <p className="p-8 font-poppins text-theme-color">About the user</p>
          </div>
        </section>
        <section className="border-b-2 border-t-2 p-8 flex flex-col items-center mx-8 xl:mx-64 md:mx-32 border-x-2">
          <h2 className="heading-two-font-style">Edit profile</h2>
          <ShowPostMedia />
        </section>
        <section>
          <h3 className="heading-three-font-style text-center main-border-styling border-b-2 p-8">
            User posts
          </h3>
          <ShowUserPostsOnProfilePage />
        </section>
      </main>
    </>
  );
}
