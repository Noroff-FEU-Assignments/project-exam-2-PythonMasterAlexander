import { userRegisterSchema } from "../../utils/userSchema";
import { RegisterApiFormData } from "../../api/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { API_REGISTER } from "./../../api/constants";
import { useState, useEffect } from "react";
import { ApiErrorMessage } from "../../api/types";
export default function CreateUserPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterApiFormData>({
    resolver: yupResolver(userRegisterSchema),
  });
  async function registerUserFetchData(data: RegisterApiFormData) {
    try {
      const response = await fetch(API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorData.errors.forEach((error: ApiErrorMessage) => {
            console.log("Error", error);
            setIsError(true);
            setErrorMessage(error.message);
          });
        }
      } else {
        setSuccessMessage("User registered successfully");
        navigate("/welcome-to-net-social-page");
        console.log("Successfuly navigated to welcome page");
      }
    } catch (error) {
      console.log("Error during API request: ", error);
    }
  }
  useEffect(() => {}, []);
  return (
    <>
      <main className="flex flex-col xl:flex-column items-center justify-center h-screen text-sm">
        <h1 className="m-8 text-4xl">Create user</h1>
        <form
          id="register-user"
          onSubmit={handleSubmit(registerUserFetchData)}
          className="mx-8 p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
        >
          <fieldset>
            <p className="text-red-500">
              {isError ? errorMessage : successMessage}
            </p>
            <div>
              <label className="block">Choose a username</label>
              <input
                {...register("name")}
                className="container rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div>
              <label className="block mt-6">Write you email</label>
              <input
                {...register("email")}
                className="container rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block">Choose a password</label>
              <input
                {...register("password")}
                className="container rounded h-10 border-[#cbd5e1] border-2 mt-1"
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
