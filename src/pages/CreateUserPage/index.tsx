import { userSchema } from "../../utils/userSchema";
import { FormData } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { API_REGISTER } from "./../../api/constants";

export default function CreateUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const registerUser = async (data: FormData) => {
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
        console.error("API Error: ", errorData);
        // Check if the errors array is present in the API response
        if (errorData.errors && Array.isArray(errorData.errors)) {
          // Handle specific errors from the errors array
          interface ApiError {
            field: string;
            message: string;
            // Add other properties if needed
          }
          errorData.errors.forEach((error: ApiError) => {
            // Log or handle each error
            console.error("API Validation Error:", error);
            // Example: Update form errors based on the API response
            // setError(error.fieldName, { type: 'manual', message: error.errorMessage });
          });
        }

        throw new Error("Registration failed");
      } else {
        console.log("User registered successfully");
      }
    } catch (error) {
      console.error("Error during API request: ", error);
    }
    console.log(errors);
    console.log(data);
  };
  console.log(API_REGISTER, errors);
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
            <div>
              <label className="block">Choose a username</label>
              <input
                {...register("name")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
            </div>
            <div>
              <label className="block mt-6">Write you email</label>
              <input
                {...register("email")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
            </div>
            <div className="mt-6">
              <label className="block">Choose a password</label>
              <input
                {...register("password")}
                className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
              />
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
