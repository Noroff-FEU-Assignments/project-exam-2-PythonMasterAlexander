import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../utils/userSchema";
import { LoginApiFormData } from "../../api/types";
export default function LoginUserForm({ loginUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginApiFormData>({
    resolver: yupResolver(userLoginSchema),
  });
  return (
    <form
      id="login-user"
      className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg"
      onSubmit={handleSubmit(loginUser)}
    >
      <p>{isError && errorMessage}</p>
      <div>
        <label className="block">Email</label>
        <input
          {...register("email")}
          className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      <div className="mt-6">
        <label className="block">Password</label>
        <input
          {...register("password")}
          className="rounded h-10 border-[#cbd5e1] border-2 mt-1"
        />
        <p className="text-red-500">{errors.password?.message}</p>
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
  );
}
