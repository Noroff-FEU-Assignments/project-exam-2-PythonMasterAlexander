import { Helmet } from "react-helmet";
import { userRegisterSchema } from "../../utils/userSchema";
import { RegisterApiFormData } from "../../api/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { API_REGISTER, post } from "./../../api/constants";
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
        method: post,
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
        navigate("/welcome-to-net-social");
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
          content="The create user page for Net Social, on this page the user can create a new user for Net Social."
        />
        <title>Create User</title>
      </Helmet>
      <main className="main-container-style xl:flex-column">
        <h1 className="m-8 heading-one-font-style">Create user</h1>
        <form
          id="register-user"
          onSubmit={handleSubmit(onSubmit)}
          className="mx-8 p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
        >
          <fieldset>
            {errorMessage && <p className="error-text-style">{errorMessage}</p>}
            {successMessage && (
              <p className="success-text-style">{successMessage}</p>
            )}
            <div>
              <label className="block form-label-styling">
                Choose a username
              </label>
              <input
                placeholder="Choose"
                {...register("name")}
                className="primary-input-style"
              />
              <p className="error-text-style">{errors.name?.message}</p>
            </div>
            <div>
              <label className="block mt-6 form-label-styling">
                Write you email
              </label>
              <input
                placeholder="Choose"
                {...register("email")}
                className="primary-input-style"
              />
              <p className="error-text-style">{errors.email?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block form-label-styling">
                Choose a password
              </label>
              <input
                type="password"
                {...register("password")}
                className="primary-input-style"
                placeholder="Choose"
              />
              <p className="error-text-style">{errors.password?.message}</p>
            </div>
            <div className="btn-container my-6 border-[#fa8072]">
              <button className="uppercase font-bold font-poppins text-theme-color">
                Create User
              </button>
            </div>
            <div className="btn-container border-[#cbd5e1]">
              <Link to={"/"}>
                <strong>OR</strong> go back
              </Link>
            </div>
          </fieldset>
        </form>
      </main>
    </>
  );
}
