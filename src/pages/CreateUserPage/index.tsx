import { userRegisterSchema } from "../../utils/userSchema";
import { RegisterApiFormData } from "../../api/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { API_REGISTER } from "./../../api/constants";
import { useState } from "react";
export default function CreateUserPage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterApiFormData>({
    resolver: yupResolver(userRegisterSchema),
  });

  const onSubmit = async function (data: RegisterApiFormData) {
    try {
      setErrorMessage(undefined);
      setSuccessMessage(undefined);

      const response = await fetch(API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          errorData.errors?.[0].message ??
            "There was an error registering the user",
        );
      } else {
        setSuccessMessage("User registered successfully");
        reset();
        navigate("/welcome-to-net-social-page");
      }
    } catch (error) {
      console.log("Error during API request: ", error);
      setErrorMessage("There was an error registering the user");
    }
  };

  return (
    <>
      <main className="flex flex-col xl:flex-column items-center justify-center h-screen text-sm">
        <h1 className="m-8 text-4xl">Create user</h1>
        <form
          id="register-user"
          onSubmit={handleSubmit(onSubmit)}
          className="mx-8 p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
        >
          <fieldset>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
            <div>
              <label className="block">Choose a username</label>
              <input {...register("name")} className="primary-input-style" />
              <p className="text-red-500 mt-2">{errors.name?.message}</p>
            </div>
            <div>
              <label className="block mt-6">Write you email</label>
              <input {...register("email")} className="primary-input-style" />
              <p className="text-red-500 mt-2">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block">Choose a password</label>
              <input
                type="password"
                {...register("password")}
                className="primary-input-style"
              />
              <p className="text-red-500 mt-2">{errors.password?.message}</p>
            </div>
            <div className="btn-container my-6 border-[#fa8072]">
              <button className="uppercase font-bold">Create User</button>
            </div>
            <div className="btn-container border-[#cbd5e1]">
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
