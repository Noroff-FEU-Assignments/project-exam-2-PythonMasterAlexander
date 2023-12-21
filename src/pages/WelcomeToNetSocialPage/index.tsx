import { Link } from "react-router-dom";
import LogoLink from "../../components/LogoLink";
export default function WelcomeToNetSocialPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-sm">
        <h1 className="text-center text-4xl">
          Welcome to
          <LogoLink />
        </h1>
        <div className="rounded-xl border-2 text-center p-2 border-[#FA8072]">
          <Link to={"/"}>Continue</Link>
        </div>
        <p>to sign in</p>
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
