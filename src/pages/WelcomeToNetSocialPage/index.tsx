import MoonIcon from "../../components/MoonIcon";
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
        <div className="btn-container border-[#FA8072] w-48 mt-8">
          <Link to={"/"}>Continue</Link>
        </div>
        <p className="mt-6">to sign in</p>
        <div className="mt-8 lg:mt-auto lg:mb-8 text-center">
          <span className="pr-8">Dark mode</span>
          <MoonIcon />
          <span>
            {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
          </span>
        </div>
      </main>
    </>
  );
}
