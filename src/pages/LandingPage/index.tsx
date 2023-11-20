import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        {/*
        <section>
        </section>
        */}
        <section className="rounded-xl border-2 border-[#cbd5e1]">
          <div>
            <label>User name</label>
            <input />
          </div>
          <div>
            <label>Password</label>
            <input />
          </div>
          <div>
            <Link to={"/"} className="uppercase font-bold">
              Login
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <strong className="uppercase">Or</strong> create user
            </Link>
          </div>
        </section>
        {/*
        <section>
          <div>
            <span>Dark mode</span>
            <span>
              Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol
            </span>
          </div>
        </section>
        */}
      </main>
    </>
  );
}
