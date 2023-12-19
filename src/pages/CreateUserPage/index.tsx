import { userSchema } from "../../utils/userSchema";
import { FormData } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export default function CreateUserPage() {
  const { handleSubmit } = useForm({ resolver: yupResolver(userSchema) });

  function submitUserForm(data: FormData) {
    console.log(data);
  }
  return (
    <>
      <main className="flex flex-col xl:flex-column items-center justify-center h-screen text-sm">
        <h1 className="m-8 text-4xl">Create user</h1>
        <form
          onSubmit={handleSubmit(submitUserForm)}
          className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
        >
          <fieldset>
            <div>
              <label className="block">Choose a username</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="mt-6">
              <label className="block">Choose a password</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="rounded-xl border-2 text-center border-[#cbd5e1] p-2 my-6">
              <button className="uppercase font-bold">Create User</button>
            </div>
            <div className="rounded-xl border-2 text-center p-2 border-[#FA8072]">
              <Link to={"/"}>
                <strong>OR</strong> go back
              </Link>
            </div>
          </fieldset>
        </form>
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
