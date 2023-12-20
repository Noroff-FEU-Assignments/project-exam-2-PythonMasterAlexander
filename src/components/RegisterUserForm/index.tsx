import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterApiFormData } from "../../api/types";
import { userRegisterSchema } from "../../utils/userSchema";
export default function RegisterUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterApiFormData>({
    resolver: yupResolver(userRegisterSchema),
  });

  return (
    <form
      id="register-user"
      onSubmit={handleSubmit(registerUser)}
      className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
    >
      <fieldset>
        <p>{isError ? errorMessage : successMessage}</p>
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
  );
}
