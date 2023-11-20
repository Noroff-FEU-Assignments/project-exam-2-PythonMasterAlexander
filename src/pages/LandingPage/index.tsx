import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <main>
        <section>
          <div>
            <label>User name</label>
            <input />
          </div>
          <div>
            <label>Password</label>
            <input />
          </div>
          <div>
            <Link to={"/"} className="bold">
              Login
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <strong className="bold">OR</strong> create user
            </Link>
          </div>
        </section>
        <section>
          <div>
            <span>Dark mode</span>
            <span>
              {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
