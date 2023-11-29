import { Link } from "react-router-dom";
export default function CreateUserPage() {
  return (
    <>
      <main>
        <form>
          <h1>
            Create User{" "}
            {/*Use conditional rendering
          if create user are successful show Welcome to -logo goes after- 
          create this as component that get called*/}
          </h1>
          <fieldset>
            <div>
              <label>Choose a username</label>
              <span>*</span>
              <input />
            </div>
            <div>
              <label>Choose a password</label>
              <span>*</span>
              <input />
            </div>
            <div>
              <button>Create User</button>
            </div>
            <div>
              <Link to={"/"}>
                <strong>OR</strong> go back
              </Link>
            </div>
          </fieldset>
        </form>
        <div></div>
      </main>
    </>
  );
}
