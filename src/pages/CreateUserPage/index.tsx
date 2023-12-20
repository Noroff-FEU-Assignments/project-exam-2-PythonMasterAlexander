import { userRegisterSchema } from "../../utils/userSchema";
import { RegisterApiFormData } from "../../api/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { API_REGISTER } from "./../../api/constants";
import { useState } from "react";
import { registerUserFetchData } from "../../api/auth/userFetchData";
export default function CreateUserPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterApiFormData>({
    resolver: yupResolver(userRegisterSchema),
  });

  const registerUser = async (data: RegisterApiFormData) => {
    await registerUserFetchData(
      API_REGISTER,
      data,
      setIsError,
      setErrorMessage,
      setSuccessMessage,
    );
  };
  return (
    <>
      <main className="flex flex-col xl:flex-column items-center justify-center h-screen text-sm">
        <h1 className="m-8 text-4xl">Create user</h1>
        <form
          id="register-user"
          onSubmit={handleSubmit(registerUser)}
          className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
        >
          <fieldset>
            <p className="text-red-500">
              {isError ? errorMessage : successMessage}
            </p>
            <div>
              <label className="block">Choose a username</label>
              <input
                {...register("name")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div>
              <label className="block mt-6">Write you email</label>
              <input
                {...register("email")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block">Choose a password</label>
              <input
                {...register("password")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500">{errors.password?.message}</p>
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
