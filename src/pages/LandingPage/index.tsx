import MoonIcon from "../../components/MoonIcon";
import NetSocialLogo from "../../components/NetSocialLogo";
import { userLoginSchema } from "../../utils/userSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApiFormData } from "../../api/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { API_LOGIN } from "./../../api/constants";
import { saveUserToLocalStorage } from "../../utils/storage";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The landing page for Net Social, this is the page the user lands on. On this page the user can login with there login information."
        />
        <title>Welcome to Net-Social</title>
      </Helmet>
      <main className="main-container-style gap-32 xl:flex-row mx-8">
        <section>
          <NetSocialLogo />
        </section>
        <section>
          <h1 className="text-center my-8 heading-one-font-style">Sign in</h1>
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
              <label className="form-label-styling block">Email</label>
              <input {...register("email")} className="primary-input-style" />
              <p className="text-red-500 mt-2">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block form-label-styling">Password</label>
              <input
                type="password"
                {...register("password")}
                className="primary-input-style"
              />
              <p className="text-red-500 mt-2">{errors.password?.message}</p>
            </div>
            <div className="btn-container my-6 border-[#FA8072]">
              <button className="uppercase font-bold font-poppins text-theme-color">
                login
              </button>
            </div>
            <div className="btn-container border-[#cbd5e1]">
              <Link
                to={"create-user-page"}
                className="font-poppins text-theme-color"
              >
                <strong className="uppercase font-bold">Or</strong> create user
              </Link>
            </div>
          </form>
          <div className="mt-8 text-center">
            <span className="pr-8 dark-mode-text-style">Dark mode</span>
            <MoonIcon />
          </div>
        </section>
        <section className="hidden xl:block">
          <div className="max-w-3xl mx-auto">
            <img
              className="w-full h-auto"
              src="../../../resources/landing-page-image.png"
              alt="Group of people gather around a computer having fun and being social together"
            />
          </div>
        </section>
      </main>
    </>
  );
}
