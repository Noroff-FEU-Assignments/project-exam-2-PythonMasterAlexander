import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LogoLink from "../../components/LogoLink";

export default function WelcomeToNetSocialPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="After creating a new user on Net Social, the user is taken to a welcome page."
        />
        <title>Welcome to Net Social</title>
      </Helmet>
      <main className="main-container-style">
        <h1 className="text-center text-4xl lg:mt-80">
          Welcome <span className="block">to</span>
          <LogoLink />
        </h1>
        <div className="btn-container border-[#FA8072] w-48 mt-8 uppercase font-poppins font-bold text-theme-color text-base">
          <Link to={"/"}>Continue</Link>
        </div>
        <p className="mt-6 font-poppins text-theme-color font-medium font-base">
          to sign in
        </p>
      </main>
    </>
  );
}
