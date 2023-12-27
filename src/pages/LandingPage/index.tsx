import LogoLink from "../../components/LogoLink";
import MoonIcon from "../../components/MoonIcon";
import { userLoginSchema } from "../../utils/userSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApiFormData } from "../../api/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { API_LOGIN } from "./../../api/constants";
import { saveUserToLocalStorage } from "../../utils/storage";
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
        const { accessToken, ...profile } = await response.json();

        saveUserToLocalStorage("user", profile);
        saveUserToLocalStorage("token", accessToken);

        setSuccessMessage("User login successfully");
        reset();
        navigate("/user-home-page");
      }
    } catch (error) {
      setErrorMessage("There was an error registering the user");
    }
  };
  return (
    <>
      <main className="main-container-style gap-32 xl:flex-row">
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
              <input {...register("email")} className="primary-input-style" />
              <p className="text-red-500 mt-2">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block">Password</label>
              <input
                type="password"
                {...register("password")}
                className="primary-input-style"
              />
              <p className="text-red-500 mt-2">{errors.password?.message}</p>
            </div>
            <div className="btn-container my-6 border-[#FA8072]">
              <button className="uppercase font-bold">Login</button>
            </div>
            <div className="btn-container border-[#cbd5e1]">
              <Link to={"create-user-page"}>
                <strong className="uppercase font-bold">Or</strong> create user
              </Link>
            </div>
          </form>
          <div className="mt-8 text-center">
            <span className="pr-8">Dark mode</span>
            <MoonIcon />
            {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
          </div>
        </section>
        <section className="hidden xl:block">
          <img
            className="max-w-3xl"
            src="../../../resources/landing-page-image.png"
            alt="Group of people gather around a computer having fun and being social together"
          />
        </section>
      </main>
    </>
  );
}
