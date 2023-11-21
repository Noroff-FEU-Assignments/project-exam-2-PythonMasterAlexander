import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-sm">
        <section>
          <h2 className="my-8 text-base font-medium">Sign in</h2>
        </section>
        <section>
          <div className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg">
            <div>
              <label className="block">User name</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="mt-6">
              <label className="block">Password</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="rounded-xl border-2 text-center border-[#cbd5e1] p-2 my-6">
              <Link to={"/"} className="uppercase font-bold">
                Login
              </Link>
            </div>
            <div className="rounded-xl border-2 text-center p-2 border-[#FA8072]">
              <Link to={"/"}>
                <strong className="uppercase font-bold">Or</strong> create user
              </Link>
            </div>
          </div>
        </section>
        <div className="m-8">
          <span>Dark mode</span>
          <span>
            {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
          </span>
        </div>
      </main>
    </>
  );
}
