import LogoLink from "../../components/LogoLink";
import { userLoginSchema } from "../../utils/userSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApiFormData } from "../../api/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { API_LOGIN } from "./../../api/constants";
export default function LandingPage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginApiFormData>({
    resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = async function (data: LoginApiFormData) {
    try {
      setErrorMessage(undefined);
      setSuccessMessage(undefined);

      const response = await fetch(API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          errorData.errors?.[0].message ?? "There was an error doing a login",
        );
      } else {
        setSuccessMessage("User login successfully");
        reset();
        navigate("/user-profile-page");
      }
    } catch (error) {
      console.log("Error during API request: ", error);
      setErrorMessage("There was an error registering the user");
    }
  };
  return (
    <>
      <main className="flex flex-col xl:flex-row items-center justify-center h-screen text-sm">
        <section className="mx-8">
          <h1 className="flex justify-center">
            <LogoLink />
          </h1>
          <h2 className="text-center my-8 text-base font-medium">Sign in</h2>
          <form
            id="login-user"
            className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <div>
              <label className="block">Email</label>
              <input
                {...register("email")}
                className="container rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500 mt-1">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block">Password</label>
              <input
                {...register("password")}
                className="container rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
              <p className="text-red-500 mt-1">{errors.password?.message}</p>
            </div>
            <div className="rounded-xl border-2 text-center border-[#cbd5e1] p-2 my-6">
              <button className="uppercase font-bold">Login</button>
            </div>
            <div className="rounded-xl border-2 text-center p-2 border-[#FA8072]">
              <Link to={"create-user-page"}>
                <strong className="uppercase font-bold">Or</strong> create user
              </Link>
            </div>
          </form>
          <div className="m-8 text-center">
            <span>Dark mode</span>
            <span>
              {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
            </span>
          </div>
        </section>
        <section>
          <img />
        </section>
      </main>
    </>
  );
}
