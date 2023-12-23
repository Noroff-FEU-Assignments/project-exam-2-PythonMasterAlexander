import { Link } from "react-router-dom";
import LogoLink from "../../components/LogoLink";
export default function WelcomeToNetSocialPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-sm">
        <h1 className="text-center text-4xl">
          Welcome <span className="block">to</span>
          <LogoLink />
        </h1>
        <div className="btn-container border-[#FA8072] w-48 mt-8">
          <Link to={"/"}>Continue</Link>
        </div>
        <p className="mt-6">to sign in</p>
        <div className="m-8 text-center">
          <span>Dark mode</span>
          <span>
            {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
          </span>
        </div>
      </main>
    </>
  );
}
